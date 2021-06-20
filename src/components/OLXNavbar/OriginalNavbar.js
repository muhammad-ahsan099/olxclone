import './olxNavbar.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Assets/images/olx-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import {Link} from 'react-router-dom';
import MiniNav from './MiniNav';




function OriginalNavbar() {


  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /0-9/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });



  return (
    <div>
      <div>
        <AppBar style={{ width: '100%' }}>
          <Toolbar position="static" style={{ backgroundColor: "#eeeeee" }}>
              <Link to="/">
            <IconButton edge="start" className="menuButton" aria-label="menu">
              <img src={logo} width="68px" height="48px" alt="olx-logo" />
            </IconButton>
            </Link>

            <Autocomplete
              id="grouped-demo"
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.title}
              style={{ width: 300, backgroundColor: 'white' }}

              renderInput={(params) =>
                <div>

                  <TextField {...params} placeholder="Search by City, Area and Location" variant="outlined"
                  
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="start" >
                        
                  //         <SearchIcon />
                        
                  //     </InputAdornment>
                  //   )
                  // }}

                />
                 </div>
              }
            />



            <input type="text" name="search" placeholder="Find Cars, Mobile Phones and more..." id="searchbox" />
            <button id="search-btn">
              <SearchIcon style={{ color: 'white' }} />
            </button>
            <li id="link" >Login</li>
            <Link to='/post'>

            <span className="border" ><b>+</b> SELL</span>

            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <MiniNav />


    </div>
  )
}

export default OriginalNavbar;




// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Faisalabad' },
  { title: 'Lahore' },
  { title: 'Karachi' },
  { title: 'Sakhar'},
  { title: 'Multan' },
  ]





