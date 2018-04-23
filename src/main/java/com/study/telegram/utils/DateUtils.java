package com.study.telegram.utils;

import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;

@Component
public class DateUtils {
    /**
     * get local date
     *
     * @return
     */
    public LocalDate getLocalDate()
    {
        Date date = new Date();
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        return localDate;
    }


    /**
     *
     * @param dateInput
     * @param parternFormat
     */
    public String convertDateToString(@NotNull Date dateInput, @NotNull String parternFormat)
    {
        DateFormat sdf = new SimpleDateFormat(parternFormat);
        return sdf.format(dateInput);
    }


    /**
     * add number of day to specific date
     *
     * @param dateInput
     * @param numberOfDay
     * @return
     */
    public Date addDate(Date dateInput, int numberOfDay)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(dateInput);
        cal.add(Calendar.DAY_OF_MONTH, numberOfDay);
        return cal.getTime();
    }
}
