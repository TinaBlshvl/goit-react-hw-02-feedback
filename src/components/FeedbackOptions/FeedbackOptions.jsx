import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <section>
      <ul className={css.list}>
        {options.map(option => (
          <li key={option.id} className={css.item}>
            <button
              type="onSubmit"
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
