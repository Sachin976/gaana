import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/songs'
import {loginUser} from './utils/login'

const Login = (props)=>{
    const formSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser();
        props.dispatch(login(email,password));
        props.history.push('/add')

    }
    return (
    <div>
        <form onSubmit={formSubmit}>
            <input name='email' type='email' placeholder='Email'/>
            <input name='password' type='password' placeholder='Password'/>
            <button>Login</button>
        </form>
    </div>
)}


const mapStateToProps = (state)=>{
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Login);