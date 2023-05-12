export const getColorBasedOnName = props => {
  console.log(props);
  if (props.name === 'bad') {
    return props.theme.colors.bad;
  } else if (props.name === 'good') {
    return props.theme.colors.good;
  } else if (props.name === 'neutral') {
    return props.theme.colors.neutral;
  }
  else {
    return props.theme.colors.default;
  }
};

export const theme = {
  colors: {
    bad: 'red',
    good: 'green',
    neutral: 'grey',
    default: 'black',
  },
};
