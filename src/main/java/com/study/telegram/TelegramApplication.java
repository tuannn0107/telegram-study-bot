package com.study.telegram;

import com.study.telegram.bot.forecast.BittrexPredictChannelBot;
import com.study.telegram.bot.forecast.ForeCastBot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.telegram.telegrambots.ApiContextInitializer;
import org.telegram.telegrambots.TelegramBotsApi;

@SpringBootApplication
public class TelegramApplication implements  CommandLineRunner{

    @Autowired
    private ForeCastBot foreCastBot;

    @Autowired
    private BittrexPredictChannelBot bittrexPredictChannelBot;

    @Override
    public void run(String... args) throws Exception {
        TelegramBotsApi botsApi = new TelegramBotsApi();
        botsApi.registerBot(bittrexPredictChannelBot);
    }

    public static void main(String[] args) {
        ApiContextInitializer.init();
        SpringApplication.run(TelegramApplication.class, args);
    }
}
