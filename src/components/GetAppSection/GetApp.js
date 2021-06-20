

import React from 'react';
import imgAppStore from '../../Assets/images/imgAppStore.svg'
import imgGooglePlay from '../../Assets/images/imgGooglePlay.svg'
import mobLink from '../../Assets/images/mobLink.webp'


function GetApp()
{
    return(
        <div style={{display: "flex" , backgroundColor: "white"}}>
              <div colSpan="2" style={{ width: "33.3%" , paddingLeft: '3%' }}><img src={mobLink} alt="Img"/></div>

              <div colSpan="2" style={{ width: "33.3%", color: "#002f34", borderRight: "2px solid #ddd", fontFamily: 'cursive' , padding:  '0px 25px'}}>
                <h1 style={{fontFamily: 'sans-serif'}}>TRY THE OLX APP</h1>
                <h3>Buy, sell and find just about anything using the app on your mobile.</h3>
              </div>

              <div style={{ width: "33.3%" }}>
                <h3 style={{ marginLeft: "50px", fontFamily: "TimesNewRoman", color: "#002f34" }}>GET YOUR APP TODAY</h3>
                <img src={imgAppStore} alt="App Store " style={{ marginRight: "10px", marginLeft: "30px" , width:130}} />
                <img src={imgGooglePlay} style={{width:130}} alt="Google Store"/>
              </div>
        </div>
    )
}

export default GetApp;
