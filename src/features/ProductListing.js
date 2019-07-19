import React from 'react'
import Product from './Product.js'
import { connect } from 'react-redux'
import { cartItemsWithQuantity } from './cart/index.js';
import Modal from '../Modal'



function ProductListing(props) {
  
    return (
        <div className="container">
        <div className="preview">
           {props.product.map((product, i)=>
            <Product product={product} key={i+1} addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
             />)}
        </div>
        <Modal product={props.product} cart ={props.cart}/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart: (item)=>dispatch({type: 'ADD', payload: item}),
   
        removeFromCart: (item)=>dispatch({type: 'REMOVE', payload: item})
    }
   

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)