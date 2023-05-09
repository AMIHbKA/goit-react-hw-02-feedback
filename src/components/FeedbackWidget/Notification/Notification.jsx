import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Notification extends PureComponent {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
