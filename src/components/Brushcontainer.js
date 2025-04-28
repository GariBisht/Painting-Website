
import React from 'react'
import {connect} from 'react-redux'    // this is done in easy way by useSelector and useDispatch
import { brushType } from './redux/brush/brushAction';


function Brushcontainer(props) {

    console.log('props',props);
  return (
    <div>
        <section class="home" id="home" style={{backgroundImage:"url('images/brush.jpg')"}}>
    <div class="content">
    <h3>Different Brush Types-{props.numOfbrushes}</h3>
    <button onClick ={props.brushType}>Check Type Decreases</button>
</div>

</section>
</div>
  )
}
// map function
const mapStateToProps = state => {
    return {
        numOfbrushes:state.brush.numOfbrushes  // brush is key 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        brushType:() => dispatch(brushType())
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps )(Brushcontainer)

