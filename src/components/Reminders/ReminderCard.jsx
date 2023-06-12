import { useEffect, useState } from "react";

import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card, CardContent } from "@material-ui/core";
import { CardHeader, Stack, TextField } from "@mui/material";
import { IconDatePicker } from "components/Inputs/IconDatePicker";
import IconCityField from "components/Inputs/IconLocationField";
import IconTimePicker from "components/Inputs/IconTimePicker";
import IconWeather from "components/Inputs/IconWeather";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReminderCard = ({
  reminder,
  showInputLabels,
  autofocus = false,
  hasButton,
  buttonText = "Submit",
  onButtonClick,
  showDeleteBtn = false,
  handleDelete = () => {},
}) => {
  const [name, setName] = useState(reminder.name);
  const [city, setCity] = useState(reminder.city);
  const [date, setDate] = useState(reminder.date);
  const [time, setTime] = useState(reminder.time);
  const originalDate = reminder.date;

  useEffect(() => {
    setName(reminder.name);
    setCity(reminder.city);
    setDate(reminder.date);
    setTime(reminder.time);
  }, [reminder]);

  const handleNameChange = (newName) => {
    setName(newName);
  };
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
  const handleCityChange = (newCity) => {
    newCity = newCity ?? {
      label: "",
      name: "",
      key: null,
      country: "",
    };
    setCity(newCity);
  };

  const handleButtonClick = () => {
    const updatedReminder = {
      id: reminder.id,
      name: name,
      city: city,
      date: date,
      time: time,
      weather: reminder.weather,
      originalDate,
    };

    onButtonClick(updatedReminder);
  };

  return (
    <Card variant="elevation" className="reminder-card">
      <CardContent>
        {showDeleteBtn && (
          <div className="reminder-card-actions">
            <Button onClick={() => handleDelete(date, reminder.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        )}

        <div className="reminder-card-name">
          <TextField
            variant="standard"
            value={name}
            label={showInputLabels ? "Name" : ""}
            placeholder="Name your reminder"
            inputProps={{
              style: { fontSize: "1.7em", width: 415 },
              maxLength: 30,
            }}
            autoFocus={autofocus}
            onChange={(event) => handleNameChange(event.target.value)}
          />
        </div>

        <Stack spacing={2}>
          <div className="reminder-card-horizontal">
            <IconDatePicker
              icon={faCalendarDays}
              value={date}
              label="Date"
              onChange={(newValue) => {
                handleDateChange(newValue);
              }}
            />
            <IconTimePicker
              value={time}
              icon={faClock}
              label="Time"
              onChange={(newValue) => {
                handleTimeChange(newValue);
              }}
            />
          </div>

          <div className="reminder-card-horizontal">
            <IconCityField
              icon={faLocationDot}
              value={city}
              label="City"
              showInputLabels={showInputLabels}
              onChange={handleCityChange}
            />

            <IconWeather city={city} date={date} time={time} />
          </div>
        </Stack>

        {hasButton && (
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick()}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

ReminderCard.propTypes = {
  reminder: PropTypes.instanceOf(Object).isRequired,
  showInputLabels: PropTypes.bool,
  autofocus: PropTypes.bool,
  hasButton: PropTypes.bool,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default ReminderCard;
