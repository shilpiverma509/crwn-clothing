import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import "./collections-overview.styles.scss";
import CollectionPreview from '../preview-component/collection-preview.component'
import { selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import CollectionsOverviewContainer from "./collections-overview.container";


const CollectionsOverview = (({collections})=>{
  console.log (collections);
  return(
  <CollectionsOverviewContainer>
    {collections.map(({id,...otherCollectionProps})=>(
      <CollectionPreview  key={id} {...otherCollectionProps}/>
    ))}
  </CollectionsOverviewContainer>
)})

const mapStateToProps = createStructuredSelector({
collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);