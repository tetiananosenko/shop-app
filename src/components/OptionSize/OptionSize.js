import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const OptionSize = props => {

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size, index) => <li key={size}><button type="button" className={clsx(props.currentSize === size.name && styles.active)} onClick={() => props.setSize(size.name)}>{size.name}</button></li>)}
      </ul>
    </div>
  )
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setSize: PropTypes.func.isRequired,
};

export default OptionSize;