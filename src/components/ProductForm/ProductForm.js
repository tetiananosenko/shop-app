import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {

  const getPrices = () => {
    const prices = props.sizes.find((size) => size.name === props.currentSize);
    const sum = Number(prices.additionalPrice) + props.basePrice;
    return sum;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    let objInfo = {
      name: props.title,
      size: props.currentSize,
      color: props.currentColor,
      price: getPrices(),
    }
    console.log(objInfo);
  }

  return (
    <form>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setColor={props.setCurrentColor} />

      <Button className={styles.button} onClick={handleSubmit}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};


export default ProductForm;