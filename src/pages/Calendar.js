import React, { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateNavigator, CalendarGrid } from "components";
import { getCurrentDate } from "utils/dateUtils";

const Calendar = () => {
  const { month, year, date } = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState({ date, month, year });

  return (
    <div className="container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateNavigator
          date={selectedDate?.date}
          handleDateChange={setSelectedDate}
        />
        <CalendarGrid date={selectedDate?.date} />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
