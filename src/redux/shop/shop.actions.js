import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const FetchCollectionsStart = ()=>{
  console.log("fetch");

  return{
    type:ShopActionTypes.FETCH_COLLECTIONS_START
  }

}

export const fetchCollectionsSuccess = (collectionsMap)=>{
  console.log("cm",collectionsMap)
  return {
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
}}

export const fetchCollectionsFailure = (error)=>{
  return{
    type:ShopActionTypes.fetchCollectionsFailure,
    payload:error.message
  }
}

//thunkl
export const fetchCollectionsStartAsync = ()=>{
  return (dispatch)=> {
    const collectionRef = firestore.collection('collections');
    dispatch(FetchCollectionsStart());
    collectionRef.get()
    .then((snapshot)=>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log("cm",collectionsMap);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error=> {
      dispatch(fetchCollectionsFailure(error))
    });
  }
}
