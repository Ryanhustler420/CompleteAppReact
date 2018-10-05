import React from 'react';

import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NagivationItems from './../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NagivationItems />
        </nav>
    </header>
);

export default toolbar;
