import {createStore,combineReducers} from 'redux';
import gaanaReducer from '../reducers/gaanaReducer'
import filtersReducer from '../reducers/filtersReducer'

const configureStore = ()=>{
    const store = createStore(gaanaReducer)
    return store
}

export {configureStore as default}