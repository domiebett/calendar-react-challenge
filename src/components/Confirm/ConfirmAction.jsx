const { faCheck, faTimes } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Button } = require("@mui/material");

const ConfirmAction = ({
  text,
  handleActionConfirmed,
  handleActionRejected,
}) => {
  return (
    <div className="reminder-card-confirm-action">
      <span className="prompt">{text}</span>
      <span className="reminder-card-confirm-buttons">
        <span className="accept">
          <Button
            variant="contained"
            color="error"
            onClick={() => handleActionConfirmed()}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </span>
        <span className="reject">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleActionRejected()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </span>
      </span>
    </div>
  );
};

export default ConfirmAction;
