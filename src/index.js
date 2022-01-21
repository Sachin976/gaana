import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from "react-redux"
import AppRouter from './router/AppRouter';
import {initMessageListener} from 'redux-state-sync'
// import {setTextFilter} from './actions/filters'
// import { configure } from '@testing-library/react';

const store = configureStore();
initMessageListener(store)
console.log(store.getState())


ReactDOM.render(<Provider store={store}><AppRouter /></Provider>,document.getElementById('root'))