import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import Button from "components/Button";
import Reminder from "components/Reminders/Reminder";
import PropTypes from "prop-types";
import { useCloseOnClickOutside } from "utils/hooks";
import CalendarDayMoreReminders from "./CalendarDayMoreReminders";
import ReminderStack from "components/Reminders/ReminderStack";

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
  const [showMore, setShowMore] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [moreRemindersStyles, setMoreRemindersStyles] = useState({});

  const cardRef = useRef();
  const showMoreRef = useRef();
  useCloseOnClickOutside(showMoreRef, () => setShowMore(false));

  useEffect(() => {
    if (cardRef.current.clientHeight < cardRef.current.scrollHeight) {
      setShowMoreButton(true);
    }

    const cardLocation = cardRef.current.getBoundingClientRect();
    setMoreRemindersStyles({
      left: cardLocation.left - 10,
      top: cardLocation.top - 10,
    });
  }, [reminders.length]);

  return (
    <>
      <Card
        ref={cardRef}
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
            <ReminderStack
              reminders={reminders}
              isEnabled={isEnabled}
              handleOpenReminder={handleOpenReminder}
            />
          </Grid>
        </CardContent>

        {showMoreButton && (
          <div className="calendar-day-show-more">
            <Button
              onClick={(event) => {
                event.stopPropagation();
                setShowMore(true);
              }}
            >
              show more...
            </Button>
          </div>
        )}
      </Card>

      {showMore && (
        <CalendarDayMoreReminders
          reminders={reminders}
          date={date}
          moreRemindersStyles={moreRemindersStyles}
          isEnabled={isEnabled}
          handleOpenReminder={handleOpenReminder}
          showMoreRef={showMoreRef}
          setShowMore={setShowMore}
        />
      )}
    </>
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
