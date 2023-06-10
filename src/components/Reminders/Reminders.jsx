import { Modal } from "@material-ui/core";
import { Stack } from "@mui/material";

const Reminders = ({
  openModal = false,
  reminders = [],
  handleModalClose = () => {},
}) => (
  <Modal open={openModal} onClose={handleModalClose}>
    <Stack spacing={2}>
      {reminders.map((reminder) => (
        <div>
          {reminder.name}
          {reminder.date}
          {reminder.time}
          {reminder.city}
          {reminder.weather}
        </div>
      ))}
    </Stack>
  </Modal>
);

export default Reminders;
