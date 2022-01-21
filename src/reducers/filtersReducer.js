const initialState = {
    text:'',
    duration:undefined
}

const filtersReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SET_DURATION':
            return {
                ...state,
                duration:action.duration
            }
        default:
            return state
    }
}

export {filtersReducer as default}