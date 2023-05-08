import { PureComponent } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
export class FeedbackWidget extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackTotalCount = () => {
    return Object.values(this.state).reduce((acc, cur) => acc + cur, 0);
  };

  positiveFeedbackPercentCount = () => {
    const { good } = this.state;
    const total = this.feedbackTotalCount();

    return total ? ((good * 100) / this.feedbackTotalCount()).toFixed(0) : 0;
  };

  feedbackButtonClickHandler = event => {
    const feedbackType = event.target.name;
    console.log('feedbackType', feedbackType);
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.feedbackTotalCount();
    const positivePercentage = this.positiveFeedbackPercentCount();
    const options = {
      good: 'Good',
      neutral: 'Neutral',
      bad: 'Bad',
    };

    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.feedbackButtonClickHandler}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
