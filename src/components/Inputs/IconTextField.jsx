import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";

const IconTextField = ({
  icon,
  value = "",
  label = "",
  onChange = () => {},
}) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <TextField
        label={label || ""}
        variant="standard"
        value={value}
        autoComplete="off"
        onChange={onChange}
      />
    </div>
  );
};

export default IconTextField;
