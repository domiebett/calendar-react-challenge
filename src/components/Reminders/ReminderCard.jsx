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

const ReminderCard = ({
  reminder,
  keepReminderOpenRef,
  showInputLabels,
  children,
  updateReminder = () => {},
}) => {
  const reminderDate = `${reminder.day}/${reminder.month}/${reminder.year}`;
  const [name, setName] = useState(reminder.name);
  const [city, setCity] = useState(reminder.city);

  const inputStateMap = {
    name: setName,
    city: setCity,
  };

  const handleReminderUpdate = (event, changedField, value) => {
    inputStateMap[changedField](value);
    const updatedReminder = reminder;
    updatedReminder[changedField] = value;
    updateReminder(updatedReminder);
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
            inputProps={{ style: { fontSize: "2em" } }}
            onChange={(event) =>
              handleReminderUpdate(event, "name", event.target.value)
            }
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
              value={reminder.city}
              label={showInputLabels ? "City" : ""}
              onChange={(event) =>
                handleReminderUpdate(event, "city", event.target.value)
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
