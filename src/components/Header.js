import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <div>
        <h2>Gaana</h2>
        <NavLink to='/' activeClassName='is-active' exact>Home</NavLink>
        <NavLink to='/create' activeClassName='is-active' exact>Add Song</NavLink>
        <NavLink to='/help' activeClassName='is-active' exact>Help</NavLink>
    </div>
)

export {Header as default}