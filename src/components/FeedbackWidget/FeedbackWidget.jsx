import { PureComponent } from 'react';

export class FeedbackWidget extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackTotalCount = () => {
    console.log(Object.values(this.state));
    const values = this.state;
    console.log(values);
    // return Object.values(this.state).reduce((acc, cur) => acc + cur, 0);
  };

  positiveFeedbackPercentCount = ({ good }) => {
    // return (this.feedbackTotalCount() / good) * 100;
  };

  feedbackButtonClickHandler = event => {
    this.setState(prevState => {});
    console.log('click on', event.target.name);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button
          type="button"
          name="good"
          onClick={this.feedbackButtonClickHandler}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={this.feedbackButtonClickHandler}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bed"
          onClick={this.feedbackButtonClickHandler}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.feedbackTotalCount}</p>
        <p>Positive feedback:{this.positiveFeedbackPercentCount}</p>
      </>
    );
  }
}
