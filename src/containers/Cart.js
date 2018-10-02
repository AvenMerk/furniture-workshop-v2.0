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
            return <React.Fragment>
                {Object.entries(cartItems).map(([productId, product], index) =>
                    <tbody key={index}>
                        <PurchaseItem productId={productId}
                                      quantity={product.quantity}
                                      price={(product.price*product.quantity).toFixed(2)}
                                      name={product.name}
                                      onChange={(event) => this.changeQuantity(productId, event)}
                                      onClick={() => this.deleteItemFromCart(productId)}

                        />
                    </tbody>
                )}
            </React.Fragment>
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
        newItems[productId].quantity = Number(event.target.value);
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
        let totalPrice =  Object.entries(this.state.items).map(([productId, product]) => (product.quantity * product.price)).reduce((acc, value) => acc + value, 0);
        return <div className="page-container">
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th colspan="2">Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {this.getCartForRender()}
                <tfoot>
                    <tr>
                        <th colspan="4">Total Price</th>
                    </tr>
                    <tr>
                        <td colspan="3">Total:</td>
                        <td>{totalPrice.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
            <div className="list__style">
                <button
                    className="standart__button"
                    onClick={this.clearAllOnClick}>
                    Clear All
                </button>
                <button
                    className="standart__button"
                    onClick={this.postCart}>
                    Fetch cart
                </button>
            </div>
        </div>
    }
}

export default connect()(Cart)

