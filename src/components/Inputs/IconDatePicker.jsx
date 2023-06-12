import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateField } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

export const IconDatePicker = ({ icon, value, label, onChange = () => {} }) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <DateField
        required={true}
        variant="standard"
        value={value}
        label={label}
        format="D/M/YYYY"
        onChange={onChange}
      />
    </div>
  );
};

IconDatePicker.propTypes = {
  icon: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
