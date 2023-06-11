import { DAYS_IN_WEEK } from "constants";
import dayjs from "dayjs";

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

export const buildDateString = (date) => {
  return date.format("D/M/YYYY");
};

export const saveReminders = (reminders) => {
  return window.localStorage.setItem(
    "monthReminders",
    JSON.stringify(reminders)
  );
};

export const getReminders = () => {
  const reminders = window.localStorage.getItem("monthReminders") ?? "{}";
  const parsedReminders = JSON.parse(reminders);

  for (let key in parsedReminders) {
    const cleanedReminders = parsedReminders[key].map((reminder) => {
      reminder["date"] = dayjs(reminder["date"]);
      reminder["time"] = dayjs(reminder["time"]);

      return reminder;
    });

    parsedReminders[key] = cleanedReminders;
  }

  return parsedReminders;
};
