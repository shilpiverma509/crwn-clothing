import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Switch,Route} from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component.jsx";
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      console.log("userAuth",userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userRef",userRef);
        userRef.onSnapshot(snapShot=>{
          console.log("snapshot",snapShot)
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>{
              console.log("state",this.state)
          })
        })
      }
      this.setState({currentUser:userAuth})
    })
  }
   componentWillUnmount(){
    this.unsubscribeFromAuth();
   }

  render(){
  return (
    <div>
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    </div>
  );
}
}


export default App;
