
import React from 'react'
import {connect} from 'react-redux'    // this is done in easy way by useSelector and useDispatch
import {buyColors} from './redux/colors/colorAction';


function ColorContainer(props) {

    console.log('props',props);
  return (
    <div>
        <section class="home" id="home" style={{backgroundImage:"url('images/Paint.jpg')"}}>
    <div class="content">
    <h3>Different Color Types-{props.numOfColors}</h3>
    <button onClick ={props.buyColors}>Color Type Decreases</button>
</div>

</section>
</div>
  )
}
// map function
const mapStateToProps = state => {
    return {
        numOfColors:state.color.numOfColors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyColors:() => dispatch(buyColors())
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps )(ColorContainer)
