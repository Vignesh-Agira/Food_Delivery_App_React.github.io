import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import StoreProvider from './store/StoreProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);


const showCartHandler = () => {
    setCartIsShown(true);
  }
  
const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <StoreProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} 
          />}
          <Header onShowCart={showCartHandler}/>
          <main>
            <Meals/>
          </main>
    </StoreProvider>
  );
}

export default App;
