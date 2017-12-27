import React from 'react';
import classes from './ContactData.css';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Jane Doe',
                address: {
                    street: 'Street 1',
                    zipCode: '333',
                    country: 'USA'
                },
                email: 'jane@gmail.com'
            },
            deliveryMethod: 'a'
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });

    };

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Your email" />
                <input type="text" name="street" placeholder="street" />
                <input type="text" name="postal" placeholder="postalCode" />
                <Button
                    btnType="Success"
                    clicked={this.orderHandler}
                >
                    <span style={{color: 'green'}}>Order</span>
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;