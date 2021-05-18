import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Switch,Route, Redirect} from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component.jsx";
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import CheckoutPage from './pages/checkout/checkout.component';
import {selectCurrentUser} from "./redux/user/user.selector";
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser,collectionsArray}= this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      console.log("userAuth",userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        // console.log("useREf",userRef);

        //whenever snapshot object updates
        userRef.onSnapshot(snapShot=>{
          // console.log("snapshot1",snapShot.data())
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
    // addCollectionAndDocuments("collections",collectionsArray.map(
    //     ({title,items})=>({ title,items})))
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signIn" render={()=>
            this.props.currentUser ?
              (<Redirect to='/'  />)
              :
              (
              <SignInAndSignUpPage />
          )}  />
        </Switch>
      </div>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview

})

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps) (App);
