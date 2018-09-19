import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers/combineReducers'
import FurnitureWorkshop from './containers/FurnitureWorkshop'
import './styles/styles.css'


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
            <FurnitureWorkshop />
    </Provider>,
    document.getElementById('root')
);
