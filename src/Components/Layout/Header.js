import React, { Fragment } from 'react';
import mealsImage from '../../Assets/food_final.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1 className='font-effect-fire-animation'>Heaven Foods...!</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Taste the Food' />
        </div>
    </Fragment>
)
}

export default Header;