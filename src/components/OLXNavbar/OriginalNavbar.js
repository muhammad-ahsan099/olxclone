
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Assets/olx-logo.png';
import SearchIcon from '@material-ui/icons/Search';

import './olxNavbar.css';

function OriginalNavbar()
{
    return(
        <>
        <div>
        <AppBar>
          <Toolbar position="static" style={{ backgroundColor: "#eeeeee" }}>
           
              <IconButton edge="start" className="menuButton" aria-label="menu">
                <img src={logo} width="68px" height="48px" alt="olx-logo" />
              </IconButton>
           
            <input type="text" name="search" placeholder="Karachi Pakistan" id="location" />
            <input type="text" name="search" placeholder="Find Cars, Mobile Phones and more.." id="searchbox" />
            <button id="search-btn">
            <SearchIcon style={{color: 'white'}}/>
            </button>
            <li  id="link" >Login</li>
           
            <span className="border" ><b>+</b> SELL</span>
          
              
          </Toolbar>
        </AppBar>
      </div>


        </>
    )
}

export default OriginalNavbar;