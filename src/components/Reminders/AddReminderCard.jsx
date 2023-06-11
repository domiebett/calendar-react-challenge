import { Button } from "@material-ui/core";
import { uuid } from "components/CalendarGrid/helpers";

import ReminderCard from "./ReminderCard";

const AddReminderCard = ({ date, keepReminderOpenRef, addReminder }) => {
  let reminder = {
    id: uuid(),
    name: "",
    time: "8:00",
    day: date.day,
    month: date.month,
    year: date.year,
    city: "",
    weather: "sunny",
  };

  const handleReminderUpdate = (updatedReminder) => {
    reminder = updatedReminder;
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
