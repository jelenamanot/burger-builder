import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => {
    return(
        <Aux>
            <p>Toolbar</p>
            <p>SideDrawer</p>
            <p>Backdrop</p>
            <main className={classes.Content}>
                { props.children }
            </main>
        </Aux>
    );
};

export default layout;