import CartActionTypes from "./cart.types";

export const toggleCartHidden = ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item)=>{
    console.log("adhfsf",item)
    return({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})}

export const removeItem = (item)=>{
    console.log("removeItem")
    return({
        type:CartActionTypes.REMOVE_ITEM,
        payload:item
    })
}

export const clearItemFromCart = (item)=>{
    console.log("clearitem")
    return ({
        type:CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload:item
    })
}