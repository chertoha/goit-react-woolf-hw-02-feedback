import PropTypes from 'prop-types';
import FeedbackButton from './FeedbackButton';
const { Component } = require('react');

class Feedback extends Component {
  render() {
    const { options, buttonHandler } = this.props;

    return (
      <div>
        <ul>
          {options.map(option => (
            <li key={option}>
              <FeedbackButton
                onClick={() => {
                  buttonHandler(option);
                }}
                value={option}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonHandler: PropTypes.func.isRequired,
};
