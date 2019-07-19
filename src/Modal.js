import React from 'react'
import { connect } from 'react-redux'
import cartReducer from './features/cart/cartReducer.js'


 function Modal(props) {

   

    const cartItem= props.cart.filter(item=>item.id === props.product[props.modalId].id)[0]
   

    function closeModal(e){
        e.preventDefault();
        props.toggleModal()
    }

    if(!props.modalOpen){
        return null
    }else{
        return (
           
            <div className="mask">
            <div className="modalhome">
            
              <h3 className='prodname'>{props.product[props.modalId].name}</h3>
              <button className="closemodal" onClick={(e)=>closeModal(e)}>X</button>
              <img className='prodimg' height={100}
              title={props.product[props.modalId].image}
              src={props.product[props.modalId].image}
              alt="product"
              />
              <div className='proddesc'>{props.product[props.modalId].description}</div>
              <div className='prodprice'>${props.product[props.modalId].price}</div>
              <div><button onClick={()=>props.addToCart(props.product[props.modalId])}>
                  Add to Cart ({(cartItem && cartItem.quantity) || 0})</button></div>
              <div className="remove"><button  onClick={()=>props.removeFromCart(cartItem)}>
                  Remove from Cart</button></div>
            </div>
            </div>
           
        )

    }
   
}
function mapStateToProps(state){
    return{
        modalOpen: state.modal.modalOpen,
        modalId: state.modal.modalId,
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch){
    return{
        toggleModal: ()=>dispatch({type: 'MODAL_OPEN'}),

        addToCart: (item) => {dispatch({type: 'ADD', payload: item})},

        removeFromCart: (item) => {dispatch({type: 'REMOVE', payload: item})}
 
    } 

}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)

