import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const mapppedCartItems = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        total: item.totalPrice,
      }}
    />
  ));


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {mapppedCartItems}
      </ul>
    </Card>
  );
};

export default Cart;