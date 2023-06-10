import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";

const IconTextField = ({ icon, value = "", onChange = () => {} }) => {
  return (
    <div className="icon-input">
      <FontAwesomeIcon icon={icon} />
      <TextField variant="standard" value={value} onChange={onChange} />
    </div>
  );
};

export default IconTextField;
