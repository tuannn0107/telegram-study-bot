package com.study.telegram.utils;


import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DateUtilsTest {
    private static Logger logger = LoggerFactory.getLogger(DateUtilsTest.class);

    @Autowired
    private DateUtils dateUtils;

    @Test
    public void addDate()
    {
        Date date = new Date(1524467617209l); // 23 April 2018
        Date nextDate = dateUtils.addDate(date, 1);
        Date next10Date = dateUtils.addDate(date, 10);
        Assert.assertEquals("20180424", dateUtils.convertDateToString(nextDate, "yyyyMMdd"));
        Assert.assertEquals("20180503", dateUtils.convertDateToString(next10Date, "yyyyMMdd"));
    }
}
