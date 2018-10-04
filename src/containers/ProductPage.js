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
    };

    // setProductName() {
    //     return => this.setState({name: event.ta})
    // }

    handleProductAmountChange() {
        return (event) => this.setState({quantity: event.target.value});
    };

    getCartFromLocaleStorage = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        return cart === null ? {} : cart
    };

    addToCartOnClick = (e) => {
        e.preventDefault();

        const productId = this.state.productId;
        const quantity = Number(this.state.quantity);
        const {name, price} = this.props.product;

        let cart = this.getCartFromLocaleStorage();
        if (cart[productId]) {
            cart[productId].quantity += quantity;
        } else {
            cart[productId] = {
                "quantity": quantity,
                "name": name,
                "price": price
            };
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    render() {
        const {product, isFetching} = this.props;
        const {quantity} = this.state;

        return <React.Fragment>
            {product
                ? <div className="page-container" style={{opacity: isFetching ? 0.5 : 1}}>
                    <h2>{product.name}</h2>
                    <ul>
                        <li className="list__style">{`categoryName: ${product.category.name}`}</li>
                        <li className="list__style">{`description: ${product.description}`}</li>
                        <li className="list__style">{`price: ${product.price}`}</li>
                    </ul>
                    <div className="list__style">
                        <p>Choose number of products:</p>
                        <form
                            onSubmit={this.addToCartOnClick}
                            className="add-option"
                        >
                            <input  type="number" min="0" max="100" step="1" value={quantity} onChange={this.handleProductAmountChange()}/>
                            <button className="standart__button">Add to cart</button>
                        </form>
                    </div>
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

