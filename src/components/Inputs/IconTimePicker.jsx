import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimeField } from "@mui/x-date-pickers";

const IconTimePicker = ({ icon, value, label, onChange = () => {} }) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <TimeField
        required={true}
        variant="standard"
        value={value}
        label={label}
        ampm={false}
        onChange={onChange}
      />
    </div>
  );
};

export default IconTimePicker;
