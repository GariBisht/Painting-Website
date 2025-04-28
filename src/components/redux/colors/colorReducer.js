import {BUY_COLORS } from './colorType'

//declare inital state 

const initialState = {
    numOfColors: 20
}

const colorReducer = (state= initialState,action) => {
    switch(action.type) {
        case BUY_COLORS: return {
            ...state,
            numOfColors: state.numOfColors - 1
        }

        default: return state 
    }
}

export default colorReducer