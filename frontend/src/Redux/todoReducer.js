const initialState = {todo:[]}


//Reducer function takes the existence state and reutrns the updated state.
export const todoReducer = ( state = initialState, action) => {
     switch(action.type){
         case 'All_Todos':
             return {
                 todos: action.payload
             };
         default:
             return state; 
     }
}