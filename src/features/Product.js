import React, { Component } from 'react'
import { connect } from 'react-redux'


class Product extends Component {
    constructor(props){
        super(props);
        this.state = {


        }

      
     
    }
  
    handleClick(e){

        e.preventDefault();
        this.props.toggleModal();
        let id = this.props.product.id-1
        this.props.getModalId(id);
     
    }
  
    render() {
        return (
            <div>
                
       <div >
        <div onClick={(e)=>this.handleClick(e)}  className="previewprod">
            <img className='prodimg' height={100} width={100}
            src={this.props.product.image}
            alt="product"
             />
            <h3>{this.props.product.name}</h3>
        </div>
        
        </div>    
         
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        modalId: state.modal.modalId
    }
}
function mapDispatchToProps(dispatch){
    return{
        toggleModal: ()=>dispatch({type: 'MODAL_OPEN'}),

        getModalId: (id)=>dispatch({type: 'MODAL_ID', payload: id})
 
    } 

}
export default connect(mapStateToProps, mapDispatchToProps)(Product)

