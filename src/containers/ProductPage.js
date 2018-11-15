import React from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from "../actions/productsAction";
import NumberInput from 'grommet/components/NumberInput';
import {ToastContainer, ToastStore} from 'react-toasts';
import { Link } from 'react-router-dom';

class ProductPage extends React.Component {
    state = {
        productId: this.props.match.params.id,
        quantity: 1
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProduct(this.state.productId))
    };

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
        if (quantity === 1) {
            ToastStore.success("Item was added to your cart");
        } else {
            ToastStore.success("Items were added to your cart");
        }

    };

    render() {
        const {product, isFetching} = this.props;
        const {quantity} = this.state;

        return <React.Fragment>
            {product
                ? <div className="workshop-container-with-links" style={{opacity: isFetching ? 0.5 : 1}}>
                    <div className="workshop-link-to-page">
                        <Link to="/" exact={'true'}> > Cartoons </Link>
                        <Link to="/products" className="tab" exact={'true'}> > {product.category.name}</Link>
                    </div>
                    <div className="workshop-page-container-with-links">
                        <h2 className="workshop-title">{product.name}</h2>
                        <ul>
                            <li className="list__style">{`Cartoon: ${product.category.name}`}</li>
                            <li className="list__style">{`${product.description}`}</li>
                            <li className="list__style">{`price: ${product.price}`}</li>
                        </ul>
                        <div className="list__style product-page">
                            <p>Choose number of posters:</p>
                            <form
                                onSubmit={this.addToCartOnClick}
                                className="add-option"
                            >
                                <NumberInput value={quantity}
                                             min={0}
                                             max={100}
                                             onChange={this.handleProductAmountChange()} />
                                <button className="standart__button workshop-add-to-cart">
                                    Add to cart</button>
                            </form>
                            <ToastContainer className="workshop-toast-position"
                                            position={ToastContainer.POSITION.TOP_RIGHT}
                                            lightBackground
                                            store={ToastStore}/>
                        </div>
                    </div>
                </div>
                : (isFetching ? <h2 className="workshop-page-container">Loading...</h2> : <h2>Empty.</h2>)
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

