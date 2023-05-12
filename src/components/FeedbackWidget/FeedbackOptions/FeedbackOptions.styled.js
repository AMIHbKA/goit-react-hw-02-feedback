import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.1em 0.3em;
  font-size: 1.2em;
  font-weight: 500;
  border-style: solid;
  color: ${props => {
    switch (props.name) {
      case 'bad':
        return 'red';
      case 'good':
        return 'green';
      default:
        return 'grey';
    }
  }};

  border-color: ${props => {
    switch (props.name) {
      case 'bad':
        return 'red';
      case 'good':
        return 'green';
      default:
        return 'grey';
    }
  }};

  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${props => {
      switch (props.name) {
        case 'bad':
          return 'red';
        case 'good':
          return 'green';
        default:
          return 'grey';
      }
    }};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;
