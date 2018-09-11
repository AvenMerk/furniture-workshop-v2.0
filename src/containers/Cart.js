import React from 'react'
import {connect} from 'react-redux'
import PurchaseItem from '../components/PurchaseItem'


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
                        <PurchaseItem productId={productId} quantity={quantity} onChange={(event) => this.changeQuantity(productId, event)}/>
                        <button onClick={() => this.deleteItemFromCart(productId)}>Remove item</button>
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

    render() {
        return <React.Fragment>
            {this.getCartForRender()}
            <button onClick={this.clearAllOnClick}>Clear All</button>
        </React.Fragment>
    }
}

export default connect()(Cart)

