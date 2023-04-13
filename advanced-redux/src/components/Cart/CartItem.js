import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { removeItemFromCart, addItemToCart } from '../../store/cart';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch(addItemToCart(props.item));
  };

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(props.item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItemFromCart}>-</button>
          <button onClick={handleAddProductToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
