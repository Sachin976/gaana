import React from 'react';
import { connect } from 'react-redux';
import { Route,Redirect} from 'react-router-dom';
import {getLoginStatus} from './utils/login'

const PrivateRoute = ({component:Component,state, ...rest})=>{
    return(
        <Route 
        {...rest}
            render={(props)=> 
            getLoginStatus() ? (<Component {...props}/>
            ) :(
                <Redirect 
                    to={{
                        pathname:'/login',
                        state:{}
                    }}
                />
            )}
        />

    )

}

const mapStateToProps = (state)=>{
    return {
        state:state
    }
}
export default connect(mapStateToProps)(PrivateRoute);