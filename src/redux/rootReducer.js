


import {combineReducers} from 'redux';
import productReducer from './reducers/productReducer';
import authReducer from './reducers/authReducer';

const rootReducer =   combineReducers({

    productReducer  ,
    authReducer
})

export default rootReducer;