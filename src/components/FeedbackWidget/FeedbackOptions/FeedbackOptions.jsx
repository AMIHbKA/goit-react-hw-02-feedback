import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {Object.keys(options).map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {options[option]}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
