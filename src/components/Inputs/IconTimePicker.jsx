import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticTimePicker, TimeField } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import IconText from "./IconText";
import IconTextField from "./IconTextField";

const IconTimePicker = ({ icon, value, label, onChange = () => {} }) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <TimeField
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
