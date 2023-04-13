import { useContext } from 'react';

import CartContext from '../../../store/cart-context';

import MealItemForm from '../MealItemForm/MealItemForm';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem;


// eslint-disable-next-line no-lone-blocks
{/* <MealItem
    id={meal.id} // this is new!
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
/> */}