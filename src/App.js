

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CarProduct from './pages/CarProducts/CarProduct';
import FanProduct from './pages/FanProducts/FanProduct';
import MensProduct from './pages/MensProducts/MensProduct';
import MobileProduct from './pages/MobileProducts/MobileProduct';
import LandingPage from './pages/LandingPage/LandingPage';
import Products from './components/Products/Product';
import OriginalNavbar from './components/OLXNavbar/OriginalNavbar';






function App() {


  return (
    <div >


      <OriginalNavbar/>
      <LandingPage />



      
      
      {/* <Router>
    
      <MainNavbar/>
      <Switch>
          <Route exact path="/">
            <LandingPage /> 
          </Route>
          <Route path="/mens">
            <MensProduct /> 
          </Route>
          <Route path="/mobiles">
            <MobileProduct /> 
          </Route>
          <Route path="/cars">
            <CarProduct /> 
          </Route>
          <Route path="/fans">
            <FanProduct />
          </Route>
        </Switch>

       
        </Router> */}


      
      
    </div>
  );
}

export default App;
