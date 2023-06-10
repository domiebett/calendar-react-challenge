import {
  faCalendarDays,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@material-ui/core";
import { Stack, TextField } from "@mui/material";

const ReminderCard = ({ reminder, handleCloseReminder = () => {} }) => {
  const reminderDate = `${reminder.day}/${reminder.month}/${reminder.year}`;

  return (
    <Card variant="elevation" className="reminder-card">
      <CardContent>
        <div className="reminder-card-name">
          <TextField
            variant="standard"
            value={reminder.name}
            inputProps={{ style: { fontSize: "2em" } }}
          />
        </div>
        <Stack spacing={2}>
          <div className="reminder-card-horizontal">
            <div className="reminder-card-content reminder-card-date">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>{reminderDate}</span>
            </div>
            <div className="reminder-card-content reminder-card-time">
              <FontAwesomeIcon icon={faClock} />
              <span>{reminder.time}</span>
            </div>
          </div>

          <div className="reminder-card-horizontal">
            <div className="reminder-card-content reminder-card-city">
              <FontAwesomeIcon icon={faLocationDot} />
              <TextField variant="standard" value={reminder.city} />
            </div>
            <div className="reminder-card-content reminder-card-weather">
              {reminder.weather}
            </div>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
