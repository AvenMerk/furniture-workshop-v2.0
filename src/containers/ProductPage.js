import React from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from "../actions/productsAction";


class ProductPage extends React.Component {
    state = {
      productId: this.props.match.params.id
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProduct(this.state.productId))
    }

    render() {
        const {product, isFetching} = this.props;
        return <React.Fragment>
            {product
                ? <div style={{opacity: isFetching ? 0.5 : 1}}>
                    <h4>{product.name}</h4>
                    <ul>
                    <li>{`id: ${product.id}`}</li>
                    <li>{`price: ${product.price}`}</li>
                    <li>{`categoryId: ${product.category_id}`}</li>
                    </ul>
                    <button>Add to cart</button>
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

