import PropTypes from 'prop-types';
import { P } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  
  return (
    <>
      <P name='good' >Good: <span >{good}</span></P>
      <P name='neutral'>Neutral: <span >{neutral}</span></P>
      <P name='bad' >Bad: <span >{bad}</span></P>
      <P name='total' >Total: <span >{total}</span></P>
      <P className= 'positive' name='positive' value={positivePercentage}>Positive feedback: <span >{positivePercentage}%</span></P>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

