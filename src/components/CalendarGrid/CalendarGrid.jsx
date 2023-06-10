import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import { CalendarHeader, CalendarDay } from "components";
import ReminderCard from "components/Reminders/ReminderCard";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";

import { getRowHeightFromCurrentMonth, uuid } from "./helpers";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const gridRowHeight = getRowHeightFromCurrentMonth(calendarDays?.length);

  const [openedReminder, setOpenedReminder] = useState(null);
  const handleOpenReminder = (reminder) => setOpenedReminder(reminder);
  const handleCloseReminder = (reminder) => setOpenedReminder(null);

  const [monthReminders, setMonthReminders] = useState({
    "9.6.2023": [
      {
        id: uuid(),
        name: "Reminder One",
        time: "10:56",
        day: 9,
        month: 6,
        year: 2023,
        city: "Nairobi",
        weather: "sunny",
      },
      {
        id: uuid(),
        name: "Reminder Two",
        time: "13:00",
        day: 9,
        month: 6,
        year: 2023,
        city: "Nairobi",
        weather: "cloudy",
      },
    ],
    "12.6.2023": [
      {
        id: uuid(),
        name: "Reminder One",
        time: "09:00",
        day: 12,
        month: 6,
        year: 2023,
        city: "Eldoret",
        weather: "windy",
      },
    ],
  });

  const handleRemindersUpdate = (changedReminder) => {
    const reminders = monthReminders;

    for (let reminder of monthReminders[changedReminder.date]) {
      if (reminder.id === changedReminder.id) {
        Object.keys(changedReminder.changed).forEach((key) => {
          reminder[key] = changedReminder.changed[key];
        });
      }
    }

    return setMonthReminders({ ...reminders });
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
          return (
            <CalendarDay
              key={`${day.number}.${day.month}.${day.year}`}
              day={day.number}
              month={day.month}
              year={day.year}
              isEnabled={day.isEnabled}
              height={gridRowHeight}
              reminders={monthReminders[dateString]}
              handleOpenReminder={handleOpenReminder}
            />
          );
        })}
      </Grid>

      {openedReminder && (
        <ReminderCard
          reminder={openedReminder}
          handleCloseReminder={handleCloseReminder}
          updateReminders={handleRemindersUpdate}
        ></ReminderCard>
      )}
    </>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
  handleModalOpen: PropTypes.func,
};

export default CalendarGrid;
