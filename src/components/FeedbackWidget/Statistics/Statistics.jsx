import { PureComponent } from 'react';

export class Statistics extends PureComponent {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </>
    );
  }
}
