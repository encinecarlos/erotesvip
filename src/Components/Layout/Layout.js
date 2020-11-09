import React from 'react';
import Main from '../../hoc/Main';
import classes from './Layout.module.css';
import Navbar from "../site/Navbar/Navbar";

const Layout = (props) => (
    <Main>
        <Navbar/>
        <div className={classes.content}>
            {props.children}
        </div>
    </Main>
);

export default Layout;
