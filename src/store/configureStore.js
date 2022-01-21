import {createStore} from 'redux';
import gaanaReducer from '../reducers/gaanaReducer'
import {applyMiddleware} from 'redux'
import {createStateSyncMiddleware} from 'redux-state-sync'
// import filtersReducer from '../reducers/filtersReducer'


const configureStore = ()=>{
    const store = createStore(gaanaReducer,
        applyMiddleware(createStateSyncMiddleware()))
    return store
}

export {configureStore as default}