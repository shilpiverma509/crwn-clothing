import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap)=>{
  console.log("ac",collectionsMap)
  return {
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
  }
}