import Notification from 'components/Notification';
import PropTypes from 'prop-types';
const { Component } = require('react');

class Statistics extends Component {
  render() {
    const { total, positivePercentage, ...rest } = this.props;

    if (total === 0)
      return <Notification message="There is no feedback yet!" />;

    const options = Object.keys(rest).map(key => ({ key, value: rest[key] }));
    return (
      <div>
        <ul>
          {options.map(({ key, value }) => (
            <li key={key}>
              <p>
                <span>{key}</span>: {value}
              </p>
            </li>
          ))}
        </ul>

        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
