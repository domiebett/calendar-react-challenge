import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticTimePicker, TimeField } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import IconText from "./IconText";
import IconTextField from "./IconTextField";

const IconTimePicker = ({ icon, value, onChange = () => {} }) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon icon={icon} />
      <TimeField
        variant="standard"
        value={value}
        ampm={false}
        onChange={onChange}
      />
    </div>
  );
};

export default IconTimePicker;
