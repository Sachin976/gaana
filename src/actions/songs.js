import {v4 as uuidv4} from 'uuid'

export const updateSongName = (name='')=>({
    type:'SONGNAME_UPDATE',
    name
})

export const updateSongDuration = (duration='')=>({
    type:'SONGDURATION_UPDATE',
    duration
})

export const updateSingerName = (singer='')=>({
    type:'SINGER_UPDATE',
    singer
})

export const addSong = ({ songName = '', songDuration = 0, singer = '' } = {}) => ({
    type: "ADD_SONG",
    song: {
        id:uuidv4(),
        songName,
        songDuration,
        singer
    }

})

export const removeSong = (id='')=>({
    type:'REMOVE_SONG',
    id
})