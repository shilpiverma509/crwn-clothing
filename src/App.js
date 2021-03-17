import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Switch,Route} from "react-router-dom";
import ShopPage from "./pages/Shop/shop.component.jsx";
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      });
      console.log()
    })
  }
  render(){
  return (
    <div>
      <div className="App">
        <Header />
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
