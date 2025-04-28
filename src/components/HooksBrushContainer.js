// incase of map returns a state value now we are using useSelector 

import React from 'react'
import{ useSelector , useDispatch} from 'react-redux'
import { brushType } from './redux/brush/brushAction'

function HooksBrushContainer() {

  const numOfbrushes =  useSelector(state => state.brush.numOfbrushes)
  const dispatch = useDispatch()
  return (

    <div>
        <h2>Number of Painting -{numOfbrushes}</h2>
        <button onClick={() => dispatch(brushType())}> Count</button>
    </div>
  )
}


export default HooksBrushContainer