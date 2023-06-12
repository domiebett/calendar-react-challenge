import { Card, CardContent, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import Reminder from "components/Reminders/Reminder";
import PropTypes from "prop-types";

const CalendarDay = ({
  date,
  height,
  isEnabled = false,
  isWeekend = false,
  reminders = [],
  isPreviousOrNextMonth = false,
  handleOpenReminder = () => {},
  handleOpenAddReminder = () => {},
}) => {
  const cardClassNames = `calendar-day-card ${
    !isEnabled && "calendar-day-card--disabled"
  } ${isWeekend && "calendar-day-card--weekend"}`;

  return (
    <Card
      onClick={(event) => isEnabled && handleOpenAddReminder(event, date)}
      variant="outlined"
      style={{ height }}
      className={cardClassNames}
    >
      <CardContent className="calendar-day-content">
        <Grid item>
          <div className="calendar-day-header">
            <p className="calendar-day-text">
              {}
              {`${isPreviousOrNextMonth ? date.format("MMM") : ""} ${date.get(
                "date"
              )}`}
            </p>
          </div>
          <Stack spacing={0.2}>
            {reminders.map((reminder, index) => (
              <Reminder
                key={index}
                reminder={reminder}
                handleOpenReminder={isEnabled && handleOpenReminder}
              ></Reminder>
            ))}
          </Stack>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Object),
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
  isWeekend: PropTypes.bool,
  reminders: PropTypes.arrayOf(PropTypes.object),
  isPreviousOrNextMonth: PropTypes.bool,
  handleOpenReminder: PropTypes.func,
  handleOpenAddReminder: PropTypes.func,
};

export default CalendarDay;
