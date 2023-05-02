import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {

  const colorName = (color) => {
    const firstLetterCap = styles[`color${color[0].toUpperCase()}${color.substring(1)}`];
    return firstLetterCap;
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color, index) => <li key={color}><button type="button" className={clsx(colorName(color), props.currentColor === color && styles.active)} onClick={() => props.setColor(color)} /></li>)}
      </ul>
    </div>
  )
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default OptionColor; 