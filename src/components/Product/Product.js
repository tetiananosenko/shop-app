import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {
  const { name, basePrice, title, colors, sizes, } = props;
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrices = useMemo(() => {
    const prices = sizes.find((size) => size.name === currentSize);
    const sum = Number(prices.additionalPrice) + basePrice;
    return sum;
  }, [sizes, basePrice, currentSize]);

  return (
    <article className={styles.product}>
      <ProductImage name={name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrices}$</span>
        </header>
        <ProductForm
          sizes={sizes} currentSize={currentSize}
          setCurrentSize={setCurrentSize} colors={colors}
          currentColor={currentColor} setCurrentColor={setCurrentColor}
         basePrice={basePrice} title={title}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;