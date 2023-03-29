import css from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <section className={css.notification}>{message}</section>;
  console.log(message);
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};