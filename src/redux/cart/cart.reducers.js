import { removeItem } from "./cart.actions";
import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden:true,
  cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action)=>{
  switch(action.type){
  case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden:!state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      console.log("ADD_ITEM")
      return{
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload)
      }

    case  CartActionTypes.REMOVE_ITEM:
      console.log("removeIy");
      return{
        ...state,
        cartItems:removeItemFromCart(state.cartItems,action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      console.log("ct")
      return{
        ...state,
        cartItems: state.cartItems.filter((item)=>item.id !== action.payload.id)
      }
      default: 
      return state;
  }
}
export default cartReducer;