import React from 'react';
import './App.css';
import Header  from './components/Header/Header';
import ProductList from './components/productList/ProductList';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";

import Basket from './components/basket/Basket';
import HomePage from './pages/HomePage';

function App() {
  return (

      <Router>
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
