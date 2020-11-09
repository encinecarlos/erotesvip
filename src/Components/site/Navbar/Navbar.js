import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../../images/logo_final.png';
import {Button} from "semantic-ui-react";


const Navbar = (props) => (
    <div className={classes.Navbar}>
        <img src={logo} alt="erotesvip.com"/>
        <Button as='a' color='pink' circular style={{marginRight: '50px'}}>POST AD</Button>
    </div>
);

export default Navbar;
