import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {addSong} from './actions/songs'
import {setTextFilter} from './actions/filters'
import { configure } from '@testing-library/react';

const store = configureStore();
store.dispatch(addSong({songName:"baby",songDuration:300,singer:'Justin beiber'}))
store.dispatch(addSong({songName:'Alone',songDuration:400,singer:'alan walker'}))
console.log(store.getState())
ReactDOM.render(<p>Hello world</p>,document.getElementById('root'))