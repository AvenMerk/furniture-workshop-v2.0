import React from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from "../actions/productsAction";

class ProductPage extends React.Component {
    state = {
        productId: this.props.match.params.id,
        quantity: 1
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProduct(this.state.productId))
    }

    handleProductAmountChange() {
        return (event) => this.setState({quantity: event.target.value});
    }

    getCartItemsList = () => {
        const cartItemsList = JSON.parse(localStorage.getItem('cart'));
        return cartItemsList === null ? [] : cartItemsList
    };

    addToCartOnClick = () => {
        let cartItemsList = this.getCartItemsList();
        cartItemsList.push({productId: Number(this.state.productId), quantity: Number(this.state.quantity)});
        localStorage.setItem('cart', JSON.stringify(cartItemsList));
    };

    render() {
        const {product, isFetching} = this.props;
        const {quantity} = this.state;

        return <React.Fragment>
            {product
                ? <div style={{opacity: isFetching ? 0.5 : 1}}>
                    <h4>{product.name}</h4>
                    <ul>
                        <li>{`id: ${product.id}`}</li>
                        <li>{`price: ${product.price}`}</li>
                        <li>{`categoryId: ${product.category_id}`}</li>
                    </ul>
                    <label htmlFor="numberOfProducts">Choose number of products:</label>
                    <input type="number" value={quantity} onChange={this.handleProductAmountChange()}/>
                    <button onClick={this.addToCartOnClick}>Add to cart</button>
                </div>
                : (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
            }
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    const {productDetailsReducer} = state;
    const {
        isFetching,
        lastUpdated,
        product
    } = productDetailsReducer || {isFetching: true, product: null};

    return {
        isFetching,
        product,
        lastUpdated,
    }
};


export default connect(mapStateToProps)(ProductPage)

