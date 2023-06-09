import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import { CalendarHeader, CalendarDay } from "components";
import AddReminderCard from "components/Reminders/AddReminderCard";
import ReminderCard from "components/Reminders/ReminderCard";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { getCurrentMonthCalendarizableDays } from "utils/dateUtils";

import {
  buildDateString,
  getReminders,
  getRowHeightFromCurrentMonth,
  saveReminders,
} from "./helpers";

const CalendarGrid = ({ date = new Date() }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const gridRowHeight = getRowHeightFromCurrentMonth(calendarDays?.length);

  const [monthReminders, setMonthReminders] = useState(getReminders());

  useEffect(() => {
    saveReminders(monthReminders);
  }, [monthReminders]);

  const [openedReminder, setOpenedReminder] = useState(null);
  const handleOpenReminder = (event, reminder) => {
    event.stopPropagation();

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

  const addReminder = (reminder) => {
    const dateString = buildDateString(reminder.date);
    const reminders = { ...monthReminders };

    if (reminders[dateString]) {
      reminders[dateString].push(reminder);
    } else {
      reminders[dateString] = [reminder];
    }

    setMonthReminders(reminders);

    closeAllReminderCards();
  };

  const updateReminder = (updatedReminder) => {
    const reminders = { ...monthReminders };

    const updatedDateString = buildDateString(updatedReminder.date);
    const originalDateString = buildDateString(updatedReminder.originalDate);

    const unEditedReminders = reminders[originalDateString].filter(
      (reminder) => {
        return reminder.id !== updatedReminder.id;
      }
    );

    const cleanedReminderUpdate = {
      name: updatedReminder.name,
      time: updatedReminder.time,
      date: updatedReminder.date,
      city: updatedReminder.city,
    };

    if (updatedDateString === originalDateString) {
      unEditedReminders.push(cleanedReminderUpdate);
    } else {
      reminders[updatedDateString]
        ? reminders[updatedDateString].push(cleanedReminderUpdate)
        : (reminders[updatedDateString] = [cleanedReminderUpdate]);
    }

    reminders[originalDateString] = unEditedReminders;

    setMonthReminders(reminders);

    closeAllReminderCards();
  };

  const deleteReminder = (date, reminderId) => {
    const reminders = { ...monthReminders };
    const dateString = buildDateString(date);
    reminders[dateString] = reminders[dateString].filter((reminder) => {
      return reminderId !== reminder.id;
    });

    closeAllReminderCards();

    setMonthReminders(reminders);
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
          const date = dayjs(
            `${day.number}/${day.month}/${day.year}`,
            "D/M/YYYY"
          );

          const dateString = buildDateString(date);
          const isWeekend = date.day() === 0 || date.day() === 6;

          return (
            <CalendarDay
              key={`${day.number}.${day.month}.${day.year}`}
              date={date}
              isEnabled={day.isEnabled}
              isWeekend={isWeekend}
              isPreviousOrNextMonth={day.isPreviousOrNextMonth}
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
          reminder={openedReminder}
          handleCloseReminder={handleCloseReminder}
          hasButton={true}
          buttonText="Update Reminder"
          showDeleteBtn={true}
          onButtonClick={updateReminder}
          handleDelete={deleteReminder}
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
