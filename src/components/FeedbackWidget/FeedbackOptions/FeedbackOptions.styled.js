import styled from 'styled-components';
import { getColorBasedOnName } from 'components/UI/Themes/theme';

export const Button = styled.button`
  padding: 0.1em 0.3em;
  font-size: 1.2em;
  font-weight: 500;
  border-style: solid;
  border-radius: 4px;
  color: ${getColorBasedOnName};
  border-color: ${getColorBasedOnName};
  cursor: pointer;

  &:hover, :focus {
    color: #fff;
    box-shadow: 0 2px 4px ${getColorBasedOnName};
    background-color: ${getColorBasedOnName};
  }

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
