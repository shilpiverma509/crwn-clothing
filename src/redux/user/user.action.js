import {UserActionTypes} from './user.types'
/*
  *an action is just a function that returns an object
 */
export const setCurrentUser =  user => {
  return({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  })

}