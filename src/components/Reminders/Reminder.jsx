const Reminder = ({
  reminder,
  keepReminderOpenRef,
  handleOpenReminder = () => {},
}) => (
  <div
    onClick={() => handleOpenReminder(reminder)}
    className="calendar-day-reminder-name"
  >
    {reminder.name}
  </div>
);

export default Reminder;
