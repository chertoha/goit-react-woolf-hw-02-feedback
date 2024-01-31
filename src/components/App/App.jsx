import Container from 'components/Container';
import Feedback from 'components/Feedback';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import { Component } from 'react';
import { countPositiveFeedbackPercentage } from 'utils/countPositiveFeedbackPercentage';
import { countTotalFeedback } from 'utils/countTotalFeedback';

const FEEDBACK_VALUE = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

class App extends Component {
  state = {
    [FEEDBACK_VALUE.GOOD]: 0,
    [FEEDBACK_VALUE.NEUTRAL]: 0,
    [FEEDBACK_VALUE.BAD]: 0,
  };

  increase = name => {
    this.setState(state => ({ ...state, [name]: state[name] + 1 }));
  };

  render() {
    const total = countTotalFeedback(...Object.values(this.state));

    const positivePercentage = countPositiveFeedbackPercentage(
      this.state[FEEDBACK_VALUE.GOOD],
      total
    );
    const feedbackOptions = Object.keys(this.state);

    return (
      <div>
        <h1 hidden>User's feedback application</h1>

        <Container>
          <Section title="Please leave feedback">
            <Feedback buttonHandler={this.increase} options={feedbackOptions} />
          </Section>
        </Container>

        <Container>
          <Section title="Statistics">
            <Statistics
              total={total}
              positivePercentage={positivePercentage}
              {...this.state}
            />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
