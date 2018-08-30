import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../actions/productsAction'
import Products from '../components/Products'

class ProductsPage extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProducts())
    }

    render() {
        const {products, isFetching} = this.props;
        const isEmpty = products.length === 0;
        return <React.Fragment>
            {isEmpty
                ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                : <div style={{opacity: isFetching ? 0.5 : 1}}>
                    <h4>Products:</h4>
                    <Products products={products}/>
                </div>
            }
        </React.Fragment>
    }
}

// Функция, определяет что передать из редьюсера в props компоненты
const mapStateToProps = state => {
    const {productsReducer} = state;
    const {
        isFetching,
        lastUpdated,
        products
    } = productsReducer || {isFetching: true, products: []};

    return {
        isFetching,
        products,
        lastUpdated,
    }
};

// props из редьюсера мапятся в компоненту в этом методе
export default connect(mapStateToProps)(ProductsPage)
