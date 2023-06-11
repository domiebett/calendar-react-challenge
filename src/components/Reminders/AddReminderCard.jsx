import { useState } from "react";

import { uuid } from "components/CalendarGrid/helpers";
import dayjs from "dayjs";

import ReminderCard from "./ReminderCard";

const AddReminderCard = ({ date, addReminder }) => {
  const baseReminder = {
    id: uuid(),
    name: "",
    time: dayjs("08:00", "HH:MM"),
    date: date,
    day: date.day,
    month: date.month,
    year: date.year,
    city: {
      label: "",
      name: "",
      key: null,
      country: "",
    },
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
      updateReminder={handleReminderUpdate}
      showInputLabels={true}
      autofocus={true}
      hasButton={true}
      buttonText={"Add Reminder"}
      onButtonClick={handleReminderAdd}
    ></ReminderCard>
  );
};

export default AddReminderCard;
