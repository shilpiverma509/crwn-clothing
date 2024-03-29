import { createSelector } from "reselect";

export const selectShop = (state)=> state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop)=>shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections)=>collections ? Object.keys(collections).map((key)=>collections[key]) : []
)

export const selectCollection = ((collectionUrlParam)=>
  createSelector(
    [selectCollections],
    // (collections)=>collections.find((collection)=>collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    (collections)=> collections ? collections[collectionUrlParam] :  null
  )
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop)=>shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop)=> !!shop.collections
)