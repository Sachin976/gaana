import React from 'react';
import {connect} from "react-redux"

const HomePage = (props)=>(
    <div>
        <h3>This is HomePage</h3>
        {props.songs.map((song)=>(
            <div key={song.id}>
                <h4>{song.songName}</h4>
                <p>{song.singer} --- {song.songDuration}</p>
            </div>
        ))}
    </div>
);

const mapStateToProps = (state)=>{
    return {
        songs:state.songs
    }
}
export default connect(mapStateToProps)(HomePage);