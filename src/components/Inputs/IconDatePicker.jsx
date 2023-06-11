import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateField } from "@mui/x-date-pickers";

export const IconDatePicker = ({ icon, value, label, onChange = () => {} }) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <DateField
        variant="standard"
        value={value}
        label={label}
        format="D/M/YYYY"
        onChange={onChange}
      />
    </div>
  );
};
