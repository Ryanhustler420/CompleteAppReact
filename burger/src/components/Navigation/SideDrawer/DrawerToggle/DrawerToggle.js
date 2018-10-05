import React from 'react';
import Aux from './../../../../hoc/Aux';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <Aux>
        <div className={classes.Bar}></div>
        <div className={classes.Bar}></div>
        <div className={classes.Bar}></div>
    </Aux>
);

export default drawerToggle;