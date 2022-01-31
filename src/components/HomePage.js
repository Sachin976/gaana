import React,{useEffect, useState} from 'react';
import {connect} from "react-redux"
import {getLoginStatus,logoutUser} from './utils/login'

const HomePage = (props)=>{
    const [isLogin,setIsLogin] = useState(undefined);
    
    const logout = ()=>{
        logoutUser();
        setIsLogin(false)
    }
    useEffect(()=>{
        setIsLogin(getLoginStatus);
    },[])
    return (
    <div>
        <h3>This is HomePage</h3>
        {isLogin ?<button onClick={logout}>Logout</button>:('')}
        {props.songs.map((song)=>(
            <div key={song.id}>
                <h4>{song.songName}</h4>
                <p>{song.singer} --- {song.songDuration}</p>
            </div>
        ))}
    </div>
)};

const mapStateToProps = (state)=>{
    return {
        songs:state.songs
    }
}
export default connect(mapStateToProps)(HomePage);