import React from 'react';
import {connect} from 'react-redux'
import {updateSongName,updateSingerName,updateSongDuration, addSong} from '../actions/songs'

const AddSongPage = (props)=>{
    const submit = (e)=>{
        e.preventDefault();
        const songName = e.target.name.value;
        const songDuration = e.target.duration.value;
        const singer = e.target.singer.value;
        props.dispatch(addSong({songName,songDuration,singer}))
        props.history.push('/')
    }
    return(
    <div>
        <h3>Add song</h3>
        <form onSubmit={submit}>
            <input name='name' value={props.data.songName} onChange={(e)=>{
                props.dispatch(updateSongName(e.target.value))
            }} placeholder='Song name' type='text'/>
            <input name='duration' value={props.data.songDuration} onChange={(e)=>{
                props.dispatch(updateSongDuration(e.target.value))
            }} placeholder='Song Duration' type='text'/>
            <input name='singer' value={props.data.singer} onChange={(e)=>{
                props.dispatch(updateSingerName(e.target.value))
            }} placeholder='Song singer' type='text'/>
            <button>Add</button>
        </form>
    </div>
)}

const mapStateToProps = (state)=>{
    return {
        data:state
    };
}

export default connect(mapStateToProps)(AddSongPage)