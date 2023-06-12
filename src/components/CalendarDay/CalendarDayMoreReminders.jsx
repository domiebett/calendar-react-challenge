import ReminderStack from "components/Reminders/ReminderStack";

const { faTimes } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Card, CardContent, Stack } = require("@mui/material");
const { default: Button } = require("components/Button");
const { default: Reminder } = require("components/Reminders/Reminder");

const CalendarDayMoreReminders = ({
  reminders,
  date,
  moreRemindersStyles,
  isEnabled,
  handleOpenReminder,
  showMoreRef,
  setShowMore,
}) => {
  return (
    <Card
      ref={showMoreRef}
      className="calendar-day-more-content"
      style={moreRemindersStyles}
    >
      <CardContent>
        <div className="more-content-header">
          <span>{`${date.format("MMM")}  ${date.get("date")}`}</span>
          <Button
            onClick={() => {
              setShowMore(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
        <ReminderStack
          reminders={reminders}
          isEnabled={isEnabled}
          handleOpenReminder={handleOpenReminder}
        />
      </CardContent>
    </Card>
  );
};

export default CalendarDayMoreReminders;
