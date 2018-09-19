import React from 'react'
import {connect} from 'react-redux'
import PurchaseItem from '../components/PurchaseItem'
import {createCart} from '../actions/cartAction'


class Cart extends React.Component {
    state = {
        items: JSON.parse(localStorage.getItem('cart'))
    };

    getCartForRender = () => {
        const cartItems = this.state.items;
        if (cartItems) {
            return <ul>
                {Object.entries(cartItems).map(([productId, quantity], index) =>
                    <React.Fragment key={index}>
                        <PurchaseItem productId={productId} quantity={quantity}
                                      onChange={(event) => this.changeQuantity(productId, event)}/>
                        <button className="standart__button" onClick={() => this.deleteItemFromCart(productId)}>Remove item</button>
                    </React.Fragment>
                )}
            </ul>
        } else {
            return <h1>EMPTY</h1>
        }
    };

    clearAllOnClick = () => {
        this.setState({items: null});
        localStorage.clear();
    };

    deleteItemFromCart = (productId) => {
        let newItems = {...this.state.items};
        delete newItems[productId];
        this.setState({items: newItems});
        localStorage.setItem('cart', JSON.stringify(newItems));
    };

    changeQuantity = (productId, event) => {
        let newItems = {...this.state.items};
        newItems[productId] = Number(event.target.value);
        this.setState({items: newItems});
        localStorage.setItem('cart', JSON.stringify(newItems));
    };

    postCart = () => {
        let purchases = Object.entries(this.state.items)
            .map(([productId, quantity]) => ({productId, quantity}));
        let cart = {
            firstName: "test_jopa2",
            lastName: "test_customer_last_name_1",
            middleName: "middle_name_1",
            email: "test@test.ru",
            phone: "111111",
            shippingAddress: "shipping_address_1",
            purchases,
            price: "50000",
            description: "description_1"
        };

        this.props.dispatch(createCart(JSON.stringify(cart)))
    };

    render() {
        return <div className="main">
            {this.getCartForRender()}
            <button className="standart__button" onClick={this.clearAllOnClick}>Clear All</button>
            <button className="standart__button" onClick={this.postCart}>Fetch cart</button>
        </div>
    }
}

export default connect()(Cart)

