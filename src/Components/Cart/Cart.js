import Modal from '../UI/Modal';
import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = <ul classname={classes['cart-items']}>{[{
    id: 'm6',
    name: 'Mutton Nalli Fry',
    quantiy: 3,
    price: 200,
  }].map(item => <li className={classes.list}>{item.name}</li>)}</ul>;


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span className={classes.amount}>Total Amount</span>
        <span>Rs.200</span>
      </div>
      <div className={classes.actions}> 
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;