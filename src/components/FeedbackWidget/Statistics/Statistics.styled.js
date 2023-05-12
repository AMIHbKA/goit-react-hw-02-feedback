import styled from 'styled-components';
import { getColorBasedOnName } from 'components/UI/Themes/theme';

export const P = styled.p`
  &.positive {
    color: ${props => {
      if (props.value <= 40) {
        return 'red';
      } else if (props.value >= 41 && props.value <= 60) {
        return 'gray';
      } else {
        return 'green';
      }
    }};
  }
  margin: 0 0 0.2em 0;
  font-weight: 500;
  font-size: 1.3em;
  color: ${getColorBasedOnName};
  span {
    font-weight: 700;
  }
`;
