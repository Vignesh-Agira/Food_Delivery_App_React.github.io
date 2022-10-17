import React from 'react';
import Store from './store';

const StoreProvider = (props) => {
    const addItemToCartHandler = (item) => {};

    const removeItemFromCartHandler = (id) => {};

    const store = {
        iteams: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
    <Store.Provider value={store}>
        {props.children}
    </Store.Provider>
  )
}

export default StoreProvider;