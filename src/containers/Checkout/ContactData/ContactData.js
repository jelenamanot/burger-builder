import React from 'react';
import classes from './ContactData.css';

import Button from '../../../components/UI/Button/Button';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="street" />
                    <input type="text" name="postal" placeholder="postalCode" />
                    <Button btnType="Success"><span style={{color: 'red'}}>Order</span></Button>
                </form>
            </div>
        );
    }
}

export default ContactData;