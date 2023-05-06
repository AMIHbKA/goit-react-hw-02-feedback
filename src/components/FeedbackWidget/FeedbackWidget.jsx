import { PureComponent } from 'react';

export class FeedbackWidget extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <p>Good: 3</p>
        <p>Neutral: 2</p>
        <p>Bad:2</p>
      </>
    );
  }
}
