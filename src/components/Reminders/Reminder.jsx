const Reminder = ({ reminder, handleOpenReminder = () => {} }) => (
  <div
    onClick={(event) => handleOpenReminder(event, reminder)}
    className="calendar-day-reminder-name"
  >
    {reminder.name || "Unnamed"}
  </div>
);

export default Reminder;
