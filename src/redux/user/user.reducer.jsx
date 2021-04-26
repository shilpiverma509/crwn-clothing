import {UserActionTypes} from './user.types';

/* a reducer is a function which recieves  2 properties last/current state
and an action 
*/

const INITIAL_STATE = {
  currentUser:null
}

const userReducer = (state=INITIAL_STATE,action)=>{
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:action.payload
      }
      default:
        return state;
  }
}

export default userReducer;