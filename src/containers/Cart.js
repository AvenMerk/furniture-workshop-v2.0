import React from 'react'
import {connect} from 'react-redux'
import PurchaseItem from '../components/PurchaseItem'

function getCartItemsList() {
    const cartItemsList = JSON.parse(localStorage.getItem('cart'));
    return cartItemsList === null ? [] : cartItemsList
}

class Cart extends React.Component {
    state = {
        items: getCartItemsList(),
    };

    getCartForRender = () => {
        const isCartPresent = this.state.items && this.state.items.length > 0;
        if (isCartPresent) {
            return <ul>
                {this.state.items.map((purchaseItem, index) =>
                    <React.Fragment key={index}>
                        <PurchaseItem item={purchaseItem}/>
                        <button onClick={this.deleteItemFromCart}>Remove item</button>
                    </React.Fragment>
                )}
            </ul>
        } else {
            return <h1>EMPTY</h1>
        }
    };

    clearAllOnClick = () => {
        this.setState({items: []});
        localStorage.clear();
    };

    deleteItemFromCart = () => {

    };

    render() {
        return <React.Fragment>
            {this.getCartForRender()}
            <button onClick={this.clearAllOnClick}>Clear All</button>
        </React.Fragment>
    }
}

export default connect()(Cart)

