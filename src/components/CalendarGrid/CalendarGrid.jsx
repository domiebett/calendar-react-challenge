import React, { useState } from "react";

import { Grid, Modal } from "@material-ui/core";
import { CalendarHeader, CalendarDay } from "components";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";

import { getRowHeightFromCurrentMonth } from "./helpers";
import Reminders from "components/Reminders/Reminders";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const gridRowHeight = getRowHeightFromCurrentMonth(calendarDays?.length);
  const [openModal, setModalOpened] = useState(false);
  const [monthReminders, setMonthReminders] = useState({
    "9.6.2023": [
      {
        name: "Reminder One",
        time: "10:56",
        city: "Nairobi",
        weather: "Sunny",
      },
      {
        name: "Reminder Two",
        time: "13:00",
        city: "Nairobi",
        weather: "cloudy",
      },
    ],
    "12.6.2023": [
      {
        name: "Reminder One",
        time: "09:00",
        city: "Eldoret",
        weather: "windy",
      },
    ],
  });
  const [remindersModalDate, setRemindersModalDate] = useState(null);

  const handleModalClose = () => setModalOpened(false);
  const handleModalOpen = (modalDate) => {
    setRemindersModalDate(modalDate);
    setModalOpened(true);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0}
      >
        <CalendarHeader />
        {calendarDays?.map((day) => {
          const dateString = `${day.number}.${day.month}.${day.year}`;
          const dateReminders = monthReminders[dateString];
          return (
            <CalendarDay
              key={`${day.number}.${day.month}.${day.year}`}
              day={day.number}
              month={day.month}
              year={day.year}
              isEnabled={day.isEnabled}
              height={gridRowHeight}
              handleModalOpen={handleModalOpen}
              reminders={dateReminders}
            />
          );
        })}
      </Grid>

      <Reminders
        date={remindersModalDate}
        reminders={monthReminders[remindersModalDate]}
        openModal={openModal}
        handleModalClose={handleModalClose}
      ></Reminders>
    </>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
  handleModalOpen: PropTypes.func,
};

export default CalendarGrid;
