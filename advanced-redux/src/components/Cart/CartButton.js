import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/toggle-cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <button className={classes.button} onClick={() => dispatch(toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
