import React from "react";
import { withRouter } from "react-router";
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from "./collection-preview.styles.jsx";

const CollectionPreview = ({title,items,history,match,routeName})=>(
      <CollectionPreviewContainer>
        <TitleContainer 
          onClick = {()=>history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer className="preview">
          {items
            .filter((item,index)=>{return index<4})
            .map((item)=>(
            <CollectionItem key={item.id} item={item} />
          )
            )}
        </PreviewContainer>
      </CollectionPreviewContainer>
)
export default withRouter(CollectionPreview);