import { createStore,applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk'
import {counterReducer} from './counterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todoReducer} from '../Redux/todoReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
   
})


// The store now has the ability to accept thunk functions in `dispatch`
export  const store = createStore(rootReducer,composedEnhancer);
    