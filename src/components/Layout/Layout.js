import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
    return(
        <Aux>
            <p>Toolbar</p>
            <p>SideDrawer</p>
            <p>Backdrop</p>
            <main>
                { props.children }
            </main>
        </Aux>
    );
};

export default layout;