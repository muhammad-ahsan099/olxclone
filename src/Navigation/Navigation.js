
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CarProducts from '../pages/CarProducts/CarProduct';
import FanProducts from '../pages/FanProducts/FanProduct';
import MensProducts from '../pages/MensProducts/MensProduct';
import MobileProducts from '../pages/MobileProducts/MobileProduct';
import LandingPage from '../pages/LandingPage/LandingPage';
import OriginalNavbar from '../components/OLXNavbar/OriginalNavbar';
import Footer from '../components/Footer/Footer'


import Post from '../post/Post';


export default function Navigation()
{
    return(
          
      <Router>
    

      <Switch>
          <Route exact path="/">
            <LandingPage /> 
          </Route>
          <Route path="/mens">
            <OriginalNavbar/>  
            <MensProducts /> 
            <Footer/>
          </Route>
          <Route path="/mobiles">
             <OriginalNavbar/>  
            <MobileProducts/>
            <Footer/>
          </Route>
          <Route path="/cars">
             <OriginalNavbar/>  
            <CarProducts /> 
            <Footer/>
          </Route>
          <Route path="/fans">
             <OriginalNavbar/>  
            <FanProducts />
            <Footer/>
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>


       
        </Router> 
    )
}


  