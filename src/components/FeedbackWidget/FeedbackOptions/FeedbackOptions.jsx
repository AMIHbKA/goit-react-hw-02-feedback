import { PureComponent } from 'react';

export class FeedbackOptions extends PureComponent {
  render() {
    const { options, onLeaveFeedback } = this.props;
    console.log(options);
    console.log('onLeaveFeedback', onLeaveFeedback);
    return (
      <>
        <h2>Please leave feedback</h2>
        {Object.keys(options).map(option => (
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {options[option]}
          </button>
        ))}
      </>
    );
  }
}
