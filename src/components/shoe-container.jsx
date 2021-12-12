import React from 'react'
import { connect } from 'react-redux'
import { buyShoes } from '../redux/shoes/shoeAction'


const ShoeContainer = (props) => {
    return (
            <div>
            <h1>Number Of Shoes- {props.numberOfShoes}</h1>
            <button onClick={props.buyShoes}>Buy Shoes</button>
            
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfShoes: state.numberOfShoes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyShoes: ()=> dispatch(buyShoes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoeContainer)
