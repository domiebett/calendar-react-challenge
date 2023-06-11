import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({ icon, text = "", className = "" }) => {
  return (
    <div className={`icon-input ${className}`}>
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
