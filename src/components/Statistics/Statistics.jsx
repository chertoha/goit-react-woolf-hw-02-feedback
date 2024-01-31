import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import Stat from './Stat';
import { Item, List, Percentage, Total, Wrapper } from './Statistics.styled';
const { Component } = require('react');

class Statistics extends Component {
  render() {
    const { total, positivePercentage, ...rest } = this.props;

    if (total === 0)
      return <Notification message="There is no feedback yet!" />;

    const options = Object.keys(rest).map(key => ({ key, value: rest[key] }));
    return (
      <Wrapper>
        <List>
          {options.map(({ key, value }) => (
            <Item key={key}>
              <Stat label={key} value={value} />
            </Item>
          ))}
        </List>

        <Total>Total: {total}</Total>
        <Percentage>Positive feedback: {positivePercentage}%</Percentage>
      </Wrapper>
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
