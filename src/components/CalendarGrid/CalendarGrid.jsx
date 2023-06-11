import React, { useEffect, useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import { CalendarHeader, CalendarDay } from "components";
import ReminderCard from "components/Reminders/ReminderCard";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";
import { useCloseOnClickOutside } from "utils/hooks";

import {
  buildDateString,
  getRowHeightFromCurrentMonth,
  getSampleReminders,
} from "./helpers";
import AddReminderCard from "components/Reminders/AddReminderCard";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const gridRowHeight = getRowHeightFromCurrentMonth(calendarDays?.length);

  const [monthReminders, setMonthReminders] = useState(getSampleReminders());

  const [openedReminder, setOpenedReminder] = useState(null);
  const handleOpenReminder = (event, reminder) => {
    event.stopPropagation();
    event.preventDefault();
    closeAllReminderCards();
    return setOpenedReminder(reminder);
  };
  const handleCloseReminder = () => setOpenedReminder(null);

  const closeAllReminderCards = () => {
    setOpenedReminder(null);
    setOpenAddReminder({
      open: false,
      date: null,
    });
  };

  const [openAddReminder, setOpenAddReminder] = useState({
    open: false,
    date: null,
  });
  const handleOpenAddReminder = (event, date) => {
    event.stopPropagation();
    if (openedReminder) {
      closeAllReminderCards();
      return;
    }
    setOpenAddReminder({
      open: !(openAddReminder.open || openedReminder),
      date: date,
    });
  };
  const handleCloseAddReminder = () => {
    setOpenAddReminder({ open: false, date });
  };

  const addReminder = (reminder) => {
    const dateString = buildDateString(reminder);
    const reminders = { ...monthReminders };

    if (reminders[dateString]) {
      reminders[dateString].push(reminder);
    } else {
      reminders[dateString] = [reminder];
    }

    setMonthReminders(reminders);

    closeAllReminderCards();
  };

  const keepReminderOpenRef = useRef();
  useCloseOnClickOutside(keepReminderOpenRef, closeAllReminderCards);

  const updateReminder = (updatedReminder) => {
    const reminderDate = buildDateString(updatedReminder);
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
              handleOpenAddReminder={handleOpenAddReminder}
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

      {openAddReminder.open && (
        <AddReminderCard
          date={openAddReminder.date}
          addReminder={addReminder}
        ></AddReminderCard>
      )}
    </>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
  handleModalOpen: PropTypes.func,
};

export default CalendarGrid;
