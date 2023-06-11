import { DAYS_IN_WEEK } from "constants";

const CALENDAR_ROW_HEIGHT = {
  SMALL: "13.3vh",
  MEDIUM: "16vh",
  LARGE: "20vh",
};

export const getRowHeightFromCurrentMonth = (amountOfDays) => {
  switch (amountOfDays / DAYS_IN_WEEK) {
    case 4:
      return CALENDAR_ROW_HEIGHT.LARGE;

    case 5:
      return CALENDAR_ROW_HEIGHT.MEDIUM;

    case 6:
      return CALENDAR_ROW_HEIGHT.SMALL;

    default:
      return CALENDAR_ROW_HEIGHT.MEDIUM;
  }
};

export const uuid = () => Math.random().toString(16).slice(2);

export const getSampleReminders = () => {
  return {
    "9.6.2023": [
      {
        id: uuid(),
        name: "Reminder One",
        time: "10:56",
        day: 9,
        month: 6,
        year: 2023,
        city: "Nairobi",
        weather: "sunny",
      },
      {
        id: uuid(),
        name: "Reminder Two",
        time: "13:00",
        day: 9,
        month: 6,
        year: 2023,
        city: "Nairobi",
        weather: "cloudy",
      },
    ],
    "12.6.2023": [
      {
        id: uuid(),
        name: "Reminder One",
        time: "09:00",
        day: 12,
        month: 6,
        year: 2023,
        city: "Eldoret",
        weather: "windy",
      },
    ],
  };
};

export const buildDateString = (dateObj) => {
  return `${dateObj.day}.${dateObj.month}.${dateObj.year}`;
};
