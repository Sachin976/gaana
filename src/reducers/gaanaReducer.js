const initialState = {
    songName: '',
    songDuration: '',
    singer: '',
    loginStatus:undefined,
    email:'',
    password:'',
    songs: []
}
const gaanaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loginStatus:true,
                email:action.email,
                password:action.password
            }
        case 'SONGNAME_UPDATE':
            return {
                ...state,
                songName: action.name
            }
        case 'SONGDURATION_UPDATE':
            return {
                ...state,
                songDuration: action.duration
            }
        case 'SINGER_UPDATE':
            return {
                ...state,
                singer: action.singer
            }
        case 'ADD_SONG':
            return {
                ...state,
                songName: '',
                songDuration: '',
                singer: '',
                songs: [...state.songs, action.song]
            }
        case 'REMOVE_SONG':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state
    }
}

export { gaanaReducer as default }