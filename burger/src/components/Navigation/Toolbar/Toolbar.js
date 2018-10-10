import React from 'react';

import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NagivationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.ShowSideDrawer} className={classes.MobileOnly}>
            <DrawerToggle />
        </div>
        <div className={classes.Logo}>   
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NagivationItems />
        </nav>
    </header>
);

export default toolbar;
