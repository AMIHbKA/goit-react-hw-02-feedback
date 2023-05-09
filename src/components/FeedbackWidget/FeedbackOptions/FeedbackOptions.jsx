import { PureComponent } from 'react';
import PropTypes from 'prop-types';
export class FeedbackOptions extends PureComponent {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
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

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
