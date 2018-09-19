import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../actions/productsAction'
import ProductPreview from '../components/ProductPreview'

class ProductsListPage extends React.Component {
    state = {
        id: Number(document.cookie.replace(/(?:(?:^|.*;\s*)home_page_category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
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
                : <div className="main" style={{opacity: isFetching ? 0.5 : 1}}>
                    <h2>Products:</h2>
                    {products.filter(product => product.categoryId === id).map((product, index) =>
                        <div className={''} key={index}>
                            <ProductPreview id={product.productId} name={product.name}/>
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
export default connect(mapStateToProps)(ProductsListPage)
