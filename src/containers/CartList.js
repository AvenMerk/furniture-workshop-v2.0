import React from 'react'
import {connect} from 'react-redux'
import Cart from '../components/Cart'

function getCartItemsList() {
    const cartItemsList = JSON.parse(localStorage.getItem('cart'));
    return cartItemsList === null ? [] : cartItemsList
}

class CartList extends React.Component {
    state = {
        cart: getCartItemsList(),

    };

    getCartForRender = () => this.state.cart && this.state.cart.length > 0
        ? <Cart cart={this.state.cart}/>
        : <h1>EMPTY</h1>;

        clearAllOnClick = () => {
            this.setState({
                cart: []
            });
            localStorage.clear();
        };

        render() {
        return <React.Fragment>
            {this.getCartForRender()}
            <button onClick={this.clearAllOnClick}>Clear All</button>
        </React.Fragment>
    }
}

export default connect()(CartList)

