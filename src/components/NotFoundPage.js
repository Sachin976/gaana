import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundpage = ()=>(
    <div>
        <h3>404! Page not gound</h3>
        <p>Return to <Link to='/'>home</Link></p>
    </div>
)

export {NotFoundpage as default}