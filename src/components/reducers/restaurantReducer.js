
const initialState = [];

export default (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_RESTAURANT':
            return [
                ...state ,
                action.restaurant
            ]

        case 'REMOVE_RESTAURANT':
            console.log('Restaurant Removed');
            return{
                
            }

        case 'EDIT_RESTAURANT':
            return{

            }
        default:
            return state;
    }
}