import { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Notification from './components/UI/Notification';
import Products from './components/Shop/Products';

let isInitital = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.toggleCart.isCartShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggleCart.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitital) {
      isInitital = false;
      return;
    };

    if (cart.changed) {
      dispatch(sendCartData(cart));
    };

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
