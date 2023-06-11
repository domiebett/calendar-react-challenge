import { Card, CardContent, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import Reminder from "components/Reminders/Reminder";
import PropTypes from "prop-types";

const CalendarDay = ({
  date,
  height,
  isEnabled = false,
  reminders = [],
  handleOpenReminder = () => {},
  handleOpenAddReminder = () => {},
}) => {
  return (
    <Card
      onClick={(event) => isEnabled && handleOpenAddReminder(event, date)}
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
            <p className="calendar-day-text">{date.get("date")}</p>
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
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
  handleModalOpen: PropTypes.func,
};

export default CalendarDay;
