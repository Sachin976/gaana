const initialState = []
const gaanaReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_SONG':
            return [
                ...state,action.song
            ]
        case 'REMOVE_SONG':
            return state.filter(({id})=>id !== action.id)
        default:
            return state
    }
}

export {gaanaReducer as default}