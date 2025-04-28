import {BRUSH_TYPE} from './brushType'

const initialState = {
    numOfbrushes:15
}

const brushReducer = (state = initialState , action) =>
{ switch(action.type) {
    case BRUSH_TYPE: return {
        ...state,
        numOfbrushes:state.numOfbrushes -1
    }
  default: return state
}

}

export default brushReducer