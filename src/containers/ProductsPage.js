import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../actions/productsAction'
import Product from '../components/Product'

class ProductsPage extends React.Component {
    state = {
        id: Number(document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchProducts())
    }

    render() {
        const {id} = this.state;
        const {products, isFetching} = this.props;
        const isEmpty = products.length === 0;
        return <React.Fragment>
            {isEmpty
                ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                : <div style={{opacity: isFetching ? 0.5 : 1}}>
                    <h4>Products:</h4>
                    {products.filter(product => product.category_id === id).map((product, index) =>
                        <div className={''} key={index}>
                            <Product product={product}/>
                        </div>
                    )}
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
