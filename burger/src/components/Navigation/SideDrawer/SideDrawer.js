import React from 'react';
import Logo from './../../Logo/Logo';
import NagivationItems from './../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from './../../../hoc/auxiliary/Aux';
import Backdrop from './../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}> 
            <div className={classes.Logo}>   
                <Logo/>
            </div>
                <nav>
                    <NagivationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;

