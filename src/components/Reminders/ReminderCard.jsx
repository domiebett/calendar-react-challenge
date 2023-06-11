import { useState } from "react";

import {
  faCalendarDays,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@material-ui/core";
import { Stack, TextField } from "@mui/material";
import { IconDatePicker } from "components/Inputs/IconDatePicker";
import IconTextField from "components/Inputs/IconTextField";
import IconTimePicker from "components/Inputs/IconTimePicker";
import IconWeather from "components/Inputs/IconWeather";

const ReminderCard = ({
  reminder,
  keepReminderOpenRef,
  showInputLabels,
  children,
  autofocus = false,
  updateReminder = () => {},
}) => {
  const [name, setName] = useState(reminder.name);
  const [city, setCity] = useState(reminder.city);
  const [date, setDate] = useState(reminder.date);
  const [time, setTime] = useState(reminder.time);

  const inputStateMap = {
    name: setName,
    city: setCity,
    date: setDate,
    time: setTime,
  };

  const handleReminderUpdate = (changedField, value) => {
    const currentDate = reminder.date;
    inputStateMap[changedField](value);
    const updatedReminder = { ...reminder };
    updatedReminder[changedField] = value;
    updateReminder(updatedReminder, currentDate);
  };

  return (
    <Card
      ref={keepReminderOpenRef}
      variant="elevation"
      className="reminder-card"
    >
      <CardContent>
        <div className="reminder-card-name">
          <TextField
            variant="standard"
            value={reminder.name}
            label={showInputLabels ? "Name" : ""}
            placeholder="Name your reminder"
            inputProps={{ style: { fontSize: "2em", width: "100%" } }}
            autoFocus={autofocus}
            onChange={(event) =>
              handleReminderUpdate("name", event.target.value)
            }
          />
        </div>

        <Stack spacing={2}>
          <div className="reminder-card-horizontal">
            <IconDatePicker
              icon={faCalendarDays}
              value={reminder.date}
              onChange={(newValue) => {
                handleReminderUpdate("date", newValue);
              }}
            />
            <IconTimePicker
              value={reminder.time}
              icon={faClock}
              onChange={(newValue) => {
                handleReminderUpdate("time", newValue);
              }}
            />
          </div>

          <div className="reminder-card-horizontal">
            <IconTextField
              icon={faLocationDot}
              value={reminder.city}
              label={showInputLabels ? "City" : ""}
              onChange={(event) =>
                handleReminderUpdate("city", event.target.value)
              }
            />

            <IconWeather weather={reminder.weather} />
          </div>
        </Stack>

        {children && <div className="buttons">{children}</div>}
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
