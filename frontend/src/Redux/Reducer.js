const initialState = 0


//Reducer function takes the existence state and reutrns the updated state.
export const rootReducer = ( state = initialState, action) => {
     switch(action.type){
         case 'increment':
             return state + 1;
         case 'decrement':
             return state - 1;
         default:
             return state; 
     }
}