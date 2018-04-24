package com.study.telegram.bot.forecast;

import com.study.telegram.bot.TelegramBot;
import com.study.telegram.constants.Constants;
import com.study.telegram.constants.MessageConstants;
import com.study.telegram.utils.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.api.methods.send.SendMessage;
import org.telegram.telegrambots.api.objects.Message;
import org.telegram.telegrambots.api.objects.Update;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.exceptions.TelegramApiException;

@Component
public class BittrexPredictChannelBot extends TelegramLongPollingBot implements TelegramBot {
    private static Logger logger = LoggerFactory.getLogger(ForeCastBot.class);

    @Autowired
    private DateUtils dateUtils;


    @Override
    public void onUpdateReceived(Update update) {
        Message messageReceived = update.getMessage();
        SendMessage sendMessage = new SendMessage();
        System.out.println(update.toString());

        sendMessage.setText("I'm here");
        sendMessage.setChatId(update.getChannelPost().getChatId());

        // send message to client
        try {
            execute(sendMessage);
        } catch (TelegramApiException e) {
            logger.error(MessageConstants.ERROR_WHEN_SEND_MESSAGE + Constants.SPACE + messageReceived.getFrom().getId());
            e.printStackTrace();
        }

    }


    @Override
    public String getBotToken() {
        return Constants.BOT_BITTREX_PREDICT_TOKEN;
    }

    @Override
    public String getBotUsername() {
        return Constants.BOT_BITTREX_PREDICT_NAME;
    }
}
