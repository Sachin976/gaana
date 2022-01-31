import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage';
import AddSongPage from '../components/AddSongPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from '../components/PrivateRoute';
import Login from '../components/Login';

const AppRouter = ()=>(
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/add' component={AddSongPage} exact/>

                <Route path='/help' component={HelpPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export{AppRouter as default}