import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  return (
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
    <LocalMallIcon/>
</span>
    <span>Your Cart</span>
    <span className={classes.badge}> 14 </span>
    </button>
  )
}

export default HeaderCartButton