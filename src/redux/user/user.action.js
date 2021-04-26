/*
  *an action is just a function that returns an object
 */
export const setCurrentUser =  user => ({
  type:'SET_CURRENT_USER',
  payload: user
})