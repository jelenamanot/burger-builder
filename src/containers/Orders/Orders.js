import React from 'react';

import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let orders = res.data;
                const fetchedOrders = [];
                for(let key in orders) {
                    fetchedOrders.push({
                        ...orders[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }

    render() {
        return(
            <div>
                {
                    this.state.orders.map(order =>
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={+order.price}
                        />
                    )
                }
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);