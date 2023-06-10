import { Card, CardContent, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const CalendarDay = ({
  day,
  month,
  year,
  height,
  isEnabled = false,
  reminders = [],
  handleModalOpen = () => {},
}) => {
  const dateString = `${day}.${month}.${year}`;

  return (
    <Card
      variant="outlined"
      style={{ height }}
      className={
        isEnabled
          ? "calendar-day-card"
          : "calendar-day-card calendar-day-card--disabled"
      }
      onClick={isEnabled ? () => handleModalOpen(dateString) : () => {}}
    >
      <CardContent className="calendar-day-content">
        <Grid item>
          <div className="calendar-day-header">
            <p className="calendar-day-text">{day}</p>
          </div>
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
