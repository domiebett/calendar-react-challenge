import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({ icon, text = "", className = "" }) => {
  return (
    <div className={`icon-input ${className}`}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
