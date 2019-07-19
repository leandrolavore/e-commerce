import {createStore, combineReducers} from 'redux'

import cartReducer from '../features/cart/cartReducer.js'
import modalReducer from '../features/modalReducer'

const rootReducer = combineReducers ({
    cart: cartReducer,
    modal: modalReducer

});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools)


export default store