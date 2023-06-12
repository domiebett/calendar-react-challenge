import { Stack } from "@mui/material";
import Reminder from "./Reminder";

const ReminderStack = ({ reminders, isEnabled, handleOpenReminder }) => {
  return (
    <Stack spacing={0.2}>
      {reminders.map((reminder, index) => (
        <Reminder
          key={index}
          reminder={reminder}
          handleOpenReminder={isEnabled && handleOpenReminder}
        ></Reminder>
      ))}
    </Stack>
  );
};

export default ReminderStack;
