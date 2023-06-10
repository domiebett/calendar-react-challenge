import { Card, CardContent, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import Reminder from "components/Reminders/Reminder";
import PropTypes from "prop-types";

const CalendarDay = ({
  day,
  month,
  year,
  height,
  keepReminderOpenRef,
  isEnabled = false,
  reminders = [],
  handleOpenReminder = () => {},
}) => {
  return (
    <Card
      variant="outlined"
      style={{ height }}
      className={
        isEnabled
          ? "calendar-day-card"
          : "calendar-day-card calendar-day-card--disabled"
      }
    >
      <CardContent className="calendar-day-content">
        <Grid item>
          <div className="calendar-day-header">
            <p className="calendar-day-text">{day}</p>
          </div>
          <Stack spacing={0.2}>
            {reminders.map((reminder, index) => (
              <Reminder
                keepReminderOpenRef={keepReminderOpenRef}
                key={index}
                reminder={reminder}
                handleOpenReminder={handleOpenReminder}
              ></Reminder>
            ))}
          </Stack>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.string,
  year: PropTypes.string,
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
  handleModalOpen: PropTypes.func,
};

export default CalendarDay;
