package com.study.telegram.bot;

public interface TelegramBot {
    /**
     * get bot name
     *
     * @return the name of bot
     */
    public String getBotUsername();


    /**
     * get bot token
     *
     * @return the bot token
     */
    public String getBotToken();
}
