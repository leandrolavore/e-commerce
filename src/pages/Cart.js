import React from 'react'
import {connect} from 'react-redux'

function sort(items){
    return items.sort((a,b)=>{if(a.id!==b.id){return a.id - b.id}})

}



function Cart(props) {


    let total=0;

    if (props.cart.length> 0){
    let prices = props.cart.map((item)=>item.price * item.quantity)
   
    
    total = prices.reduce((accumulator, value)=>accumulator = accumulator+value)

    
    
    
    return (
        
        <div  className="cart">
            <nav className="mobnav"><p className="mobtitle">Mobile-shop</p></nav>
                {
                    sort(props.cart).map((item, i)=> <ul key={i} className='cartul'>
                        <li className="title">{item.name}</li>
                        <li><img className='prodimg' height={100} width={100}
                         src={item.image}
                         alt="product"
                          /></li>
                        <li>In cart: {item.quantity}</li>
                        <div><button onClick={()=>props.addToCart(item)}>
                Add to Cart</button></div>
            <div><button onClick={()=>props.removeFromCart(item)}>
                Remove from Cart</button></div>
                <div className="removeall"><button onClick={()=>props.removeAllFromCart(item)}>
                Remove All</button></div>
                    </ul>)
                }
               
               <div className="apph1">
                <h1>E-commerce</h1>
                </div>
            <h2 className="total">Total: {total}</h2>
            
        </div>
    )}else{
        return(
            <div className="cartholder"><h1>No products in cart</h1></div>
        )
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch){
    return{
        addToCart: (item)=>dispatch({type: 'ADD', payload: item}),
   
        removeFromCart: (item)=>dispatch({type: 'REMOVE', payload: item}),

        removeAllFromCart: (item)=>dispatch({type: 'REMOVE_ALL', payload: item})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
