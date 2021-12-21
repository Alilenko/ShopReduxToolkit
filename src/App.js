import React from 'react';
import './App.css';
import Header  from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Basket from './components/basket/Basket';
import HomePage from './pages/HomePage';

function App() {
  return (

      <Router basename='/ShopReduxToolkit'>
          <div className="js">
        <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
             <Route path="/card" component={Basket} />
          </Switch>
          </div>
      </Router>
    
  );
}

export default App;
