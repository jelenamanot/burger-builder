import React from 'react';
import classes from './Logo.css';

import burgerLogo from '../../assets/images/127 burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="logo-burger" />
    </div>
);

export default logo;