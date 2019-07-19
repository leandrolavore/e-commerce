const initialState = {
    modalOpen: false,
    modalId: null
}



export default function modalReducer (state = initialState, action){

    switch (action.type){

        case 'MODAL_OPEN':
            
        return {
            ...state,
            modalOpen: !state.modalOpen
        }
        case 'MODAL_ID':
        return{
            ...state,
            modalId: action.payload
        }    

        default: return state;
    }


}