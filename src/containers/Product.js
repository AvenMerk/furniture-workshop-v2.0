import React from 'react';
import {connect} from 'react-redux'

import {fetchProduct} from "../actions/productsAction";


class Product extends React.Component {

    fetchProductDescription = () => {
        const {dispatch} = this.props;
        dispatch(fetchProduct(this.props.value.id));
    };

    render() {
        const {id, name} = this.props.value;
        return (
            <React.Fragment>
                <button id={id} onClick={this.fetchProductDescription}>{`name: ${name}`}</button>
                {/*TODO Сделать отдельный редусер*/}
            </React.Fragment>
        )
    }
}

export default connect()(Product)

