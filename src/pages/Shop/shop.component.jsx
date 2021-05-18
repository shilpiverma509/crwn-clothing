
import React from "react";
import { Route } from "react-router";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from "../collection/collection.component";

import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import {updateCollections} from '../../redux/shop/shop.actions'
import withSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPreview from '../../components/preview-component/collection-preview.component'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state ={
    isLoading:true
  }

  componentDidMount(){
    const {updateCollections} = this.props;

    const collectionRef = firestore.collection('collections');

    //*** using fetch ***

    // fetch('https://firestore.googleapis.com/v1/projects/crown-db-f056c/databases/(default)/documents/collections')
    // .then((response)=>response.json())
    // .then((collections)=>console.log("collectionjson",collections));

    /***using observer pattern */
    //whenever collectionRef updates or this code is run for thre first time
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
    // const collectionsMap=  convertCollectionsSnapshotToMap(snapshot);
    // updateCollections(collectionsMap);
    // this.setState ({
    //   isLoading:false
    // })
    // })

    /* ** using get *** */

    collectionRef.get().then((snapshot)=>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({isLoading:false})
    });
  }

  render(){
    const {match} = this.props;
    const {isLoading} = this.state;
    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} render= {(props)=><CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}/> 
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch)=>(
{  
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})



export default connect(null,mapDispatchToProps) (ShopPage);