import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimeField } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

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

IconTimePicker.propTypes = {
  icon: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default IconTimePicker;
