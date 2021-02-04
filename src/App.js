import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
