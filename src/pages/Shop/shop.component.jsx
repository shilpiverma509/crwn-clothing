
import React from "react";
import { Route } from "react-router";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from "../collection/collection.component";

import { connect } from "react-redux";
import { FetchCollectionsStart, fetchCollectionsStartAsync, } from '../../redux/shop/shop.actions'
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching, selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount(){

//with redux saga
// this.props.fetchCollectionsStart();

    //with thunk
    this.props.fetchCollectionsStartAsync();



    // const {updateCollections} = this.props;

    // const collectionRef = firestore.collection('collections');

    // //*** using fetch ***

    // // fetch('https://firestore.googleapis.com/v1/projects/crown-db-f056c/databases/(default)/documents/collections')
    // // .then((response)=>response.json())
    // // .then((collections)=>console.log("collectionjson",collections));

    // /***using observer pattern */
    // //whenever collectionRef updates or this code is run for thre first time
    // // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
    // // const collectionsMap=  convertCollectionsSnapshotToMap(snapshot);
    // // updateCollections(collectionsMap);
    // // this.setState ({
    // //   isLoading:false
    // // })
    // // })

    // /* ** using get *** */

    // collectionRef.get().then((snapshot)=>{
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({isLoading:false})
    // });
  }

  render(){
    const {match, isCollectionFetching,isCollectionsLoaded} = this.props;
    console.log("isColl",this.props);

    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} render= {(props)=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/> 
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching,
  isCollectionsLoaded : selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch)=>(
{  
  fetchCollectionsStartAsync : ()=>dispatch(fetchCollectionsStartAsync())
  // fetchCollectionsStart : ()=> dispatch(FetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps) (ShopPage);