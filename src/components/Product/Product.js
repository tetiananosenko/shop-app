import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrices = () => {
    const prices = props.sizes.find((size) => size.name === currentSize);
    const sum = Number(prices.additionalPrice) + props.basePrice;
    return sum;
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrices()}$</span>
        </header>
        <ProductForm
          sizes={props.sizes} currentSize={currentSize}
          setCurrentSize={setCurrentSize} colors={props.colors}
          currentColor={currentColor} setCurrentColor={setCurrentColor}
         basePrice={props.basePrice} title={props.title}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;