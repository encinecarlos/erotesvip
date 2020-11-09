import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
    <button className={classes.Button} type="button">{props.label}</button>
);

export default Button;
