package com.study.telegram.bot.forecast;

import com.study.telegram.constants.Constants;
import com.study.telegram.constants.MessageConstants;
import com.study.telegram.utils.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.api.methods.send.SendMessage;
import org.telegram.telegrambots.api.objects.Location;
import org.telegram.telegrambots.api.objects.Message;
import org.telegram.telegrambots.api.objects.Update;
import org.telegram.telegrambots.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class ForeCastBot extends TelegramLongPollingBot {
    private static Logger logger = LoggerFactory.getLogger(ForeCastBot.class);

    @Autowired
    private DateUtils dateUtils;

    public void onUpdateReceived(Update update) {
        Message messagereceived = update.getMessage();
        SendMessage sendMessage = new SendMessage();
        String dateSelected = dateUtils.convertDateToString(new Date(), "ddMMyyyy");
        if (update.getCallbackQuery() != null) {
            dateSelected = update.getCallbackQuery().getData();
            update.getMessage().getLocation();
        }

        // get forecast from api base on client location
        Location localtion = update.getMessage().getLocation();
        logger.info("Reveived message from location " + localtion.toString());

        // set forecast result to send to client
        sendMessage.setText("Your location is Da Nang. \n The weather is hot");
        sendMessage.setChatId(messagereceived.getChatId());

        // set list day to client
        InlineKeyboardMarkup inlineMarkup = new InlineKeyboardMarkup();
        List<List<InlineKeyboardButton>> rowsInline = new ArrayList<List<InlineKeyboardButton>>();
        List<InlineKeyboardButton> listDayForecast = buildListDayForecast();
        rowsInline.add(listDayForecast);
        sendMessage.setReplyMarkup(inlineMarkup);

        // send message to client
        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            logger.error(MessageConstants.ERROR_WHEN_SEND_MESSAGE + Constants.SPACE + messagereceived.getFrom().getId());
            e.printStackTrace();
        }
    }


    /**
     * build list day for forecast
     *
     * @return
     */
    private List<InlineKeyboardButton> buildListDayForecast() {
        List<InlineKeyboardButton> output = new ArrayList<InlineKeyboardButton>();
        for (int i = 0; i < 7; i++)
        {
            output.add(buildInlineKeyboardButton(dateUtils.convertDateToString(dateUtils.addDate(new Date(), i), "MM/dd"),
                    null,
                    dateUtils.convertDateToString(dateUtils.addDate(new Date(), i), "ddMMyyyy")));
        }
        return output;
    }


    /**
     * build inline keyboard button
     *
     * @param text
     * @param url
     * @param callbackData
     * @return
     */
    private InlineKeyboardButton buildInlineKeyboardButton(String text, String url, String callbackData)
    {
        InlineKeyboardButton output = new InlineKeyboardButton();
        output.setText(text);
        output.setUrl(url);
        output.setCallbackData(callbackData);
        return output;
    }


    /**
     * get bot name
     *
     * @return
     */
    public String getBotUsername() {
        return Constants.BOT_FORECAST_NAME;
    }


    /**
     * get bot token
     *
     * @return
     */
    public String getBotToken() {
        return Constants.BOT_FORECAST_TOKEN;
    }
}
