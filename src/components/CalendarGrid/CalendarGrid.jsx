import React, { useEffect, useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import { CalendarHeader, CalendarDay } from "components";
import ReminderCard from "components/Reminders/ReminderCard";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";
import { useCloseOnClickOutside } from "utils/hooks";

import { getRowHeightFromCurrentMonth, getSampleReminders } from "./helpers";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const gridRowHeight = getRowHeightFromCurrentMonth(calendarDays?.length);

  const [openedReminder, setOpenedReminder] = useState(null);
  const [monthReminders, setMonthReminders] = useState(getSampleReminders());

  const handleOpenReminder = (reminder) => setOpenedReminder(reminder);
  const handleCloseReminder = () => setOpenedReminder(null);

  const keepReminderOpenRef = useRef();
  useCloseOnClickOutside(keepReminderOpenRef, handleCloseReminder);

  const updateReminder = (updatedReminder) => {
    const reminderDate = `${updatedReminder.day}.${updatedReminder.month}.${updatedReminder.year}`;
    const reminders = { ...monthReminders };

    const dateReminders = reminders[reminderDate].map((reminder) => {
      return reminder.id === updatedReminder.id ? updatedReminder : reminder;
    });

    reminders[reminderDate] = dateReminders;

    return setMonthReminders(reminders);
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
              keepReminderOpenRef={keepReminderOpenRef}
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
          keepReminderOpenRef={keepReminderOpenRef}
          reminder={openedReminder}
          handleCloseReminder={handleCloseReminder}
          updateReminder={updateReminder}
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
