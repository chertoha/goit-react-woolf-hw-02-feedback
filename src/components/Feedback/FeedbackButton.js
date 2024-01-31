import PropTypes from 'prop-types';

const FeedbackButton = ({ onClick, value }) => {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default FeedbackButton;

FeedbackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
