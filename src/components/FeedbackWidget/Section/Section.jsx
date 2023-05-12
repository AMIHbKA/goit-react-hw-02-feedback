import PropTypes from 'prop-types';
import { H2 } from './Section.styled';

export const Section = props => {
    const { title, children } = props;
    return (
      <>
        <H2>{title}</H2>
        {children}
      </>
    );
  }


Section.propTypes = {
  title: PropTypes.string.isRequired,
};
