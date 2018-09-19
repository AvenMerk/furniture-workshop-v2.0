import React from 'react'
import {connect} from 'react-redux'
import {fetchCategory} from '../actions/categoryAction'
import Category from '../components/Category'

class HomePage extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCategory())
    }

    render() {
        const {category, isFetching} = this.props;
        const isEmpty = category.length === 0;
        return <React.Fragment>
            {isEmpty
                ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                : <div  className="main" style={{opacity: isFetching ? 0.5 : 1}}>
                    <h2>Welcome to our furniture workshop!</h2>
                    <div>
                        <p className="category__text">Furniture</p>
                        <Category category={category}/>
                    </div>
                </div>
            }
        </React.Fragment>
    }
}

// Функция, определяет что передать из редьюсера в props компоненты
const mapStateToProps = state => {
    const {categoryReducer} = state;
    const {
        isFetching,
        lastUpdated,
        category
    } = categoryReducer || {isFetching: true, category: []};

    return {
        isFetching,
        category,
        lastUpdated,
    }
};

// props из редьюсера мапятся в компоненту в этом методе
export default connect(mapStateToProps)(HomePage)
