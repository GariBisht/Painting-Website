import {combineReducers} from 'redux'
import brushReducer from './brush/brushReducer'
import colorReducer from './colors/colorReducer'

const rootReducer = combineReducers({   //it is a object
brush: brushReducer,
color:colorReducer
})

export default rootReducer