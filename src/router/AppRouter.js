import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage';
import AddSongPage from '../components/AddSongPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = ()=>(
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/add' component={AddSongPage}/>
                <Route path='/help' component={HelpPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export{AppRouter as default}