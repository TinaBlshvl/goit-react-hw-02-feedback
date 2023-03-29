import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <section>
      <ul className={css.list}>
        {options.map(option => (
          <li key={option.id} className={css.item}>
            <button
              type="button"
              name="option"
              className={css.btn}
              onClick={handleClick}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
//   handleClick: PropTypes.func.isRequired,
// };
