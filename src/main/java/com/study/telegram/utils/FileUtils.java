package com.study.telegram.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.*;

@Component
public class FileUtils {
    private static Logger logger = LoggerFactory.getLogger(FileUtils.class);
    private Integer BUFFER_SIZE = 1048576; //1M

    public String readFile(String path) throws IOException {
        return null;
    }
}
