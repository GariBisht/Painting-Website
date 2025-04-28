import {createStore} from 'redux'
//import brushReducer from './brush/brushReducer'
import rootReducer from './rootReducer'

//const store = createStore(brushReducer)
const store = createStore(rootReducer)

export default store 
