import { useState } from "react";

import {
  faCalendarDays,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@material-ui/core";
import { Stack, TextField } from "@mui/material";
import IconText from "components/Inputs/IconText";
import IconTextField from "components/Inputs/IconTextField";
import IconWeather from "components/Inputs/IconWeather";

const ReminderCard = ({ reminder, updateReminders = () => {} }) => {
  const reminderDate = `${reminder.day}/${reminder.month}/${reminder.year}`;
  const [name, setName] = useState(reminder.name);
  const [city, setCity] = useState(reminder.city);

  const handleChangeName = (event) => {
    const changedName = event.target.value;
    const reminderDateKey = `${reminder.day}.${reminder.month}.${reminder.year}`;
    setName(event.target.value);
    updateReminders({
      date: reminderDateKey,
      id: reminder.id,
      changed: {
        name: changedName,
      },
    });
  };

  return (
    <Card variant="elevation" className="reminder-card">
      <CardContent>
        <div className="reminder-card-name">
          <TextField
            variant="standard"
            value={name}
            inputProps={{ style: { fontSize: "2em" } }}
            onChange={handleChangeName}
          />
        </div>

        <Stack spacing={2}>
          <div className="reminder-card-horizontal">
            <IconText
              className="input-right-spacing"
              icon={faCalendarDays}
              text={reminderDate}
            />
            <IconText icon={faClock} text={reminder.time} />
          </div>

          <div className="reminder-card-horizontal">
            <IconTextField
              icon={faLocationDot}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <IconWeather weather={reminder.weather} />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
