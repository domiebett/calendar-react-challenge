import { useState } from "react";

import { Button } from "@material-ui/core";
import { uuid } from "components/CalendarGrid/helpers";
import dayjs from "dayjs";

import ReminderCard from "./ReminderCard";

const AddReminderCard = ({ date, keepReminderOpenRef, addReminder }) => {
  const baseReminder = {
    id: uuid(),
    name: "",
    time: dayjs("08:00", "HH:MM"),
    date: date,
    day: date.day,
    month: date.month,
    year: date.year,
    city: "",
    weather: "sunny",
  };

  const [reminder, setReminder] = useState(baseReminder);

  const handleReminderUpdate = (updatedReminder, currentDate) => {
    setReminder(updatedReminder);
  };

  const handleReminderAdd = (reminder) => {
    addReminder(reminder);
  };

  return (
    <ReminderCard
      reminder={reminder}
      keepReminderOpenRef={keepReminderOpenRef}
      updateReminder={handleReminderUpdate}
      showInputLabels={true}
      autofocus={true}
    >
      <Button
        onClick={() => {
          handleReminderAdd(reminder);
        }}
        variant="contained"
        disabled={false}
      >
        Add Reminder
      </Button>
    </ReminderCard>
  );
};

export default AddReminderCard;
