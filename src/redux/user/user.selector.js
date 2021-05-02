import { createSelector } from "reselect";

export const selectUser = (state)=>state.user;

export const currentUserSelector = createSelector(
  [selectUser],
  (user)=>user.currentUser
)