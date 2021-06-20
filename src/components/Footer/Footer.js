

import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import imgAppStore from '../../Assets/images/imgAppStore.svg'
import imgGooglePlay from '../../Assets/images/imgGooglePlay.svg'

function Footer() {
    return(

             <div>

             <div style={{width: '100%'}}> 
             <div style={{paddingBottom: 40 , backgroundColor: "#DCDCDC" }}>         
                      <table style={{ border: "1px solid #DCDCDC", borderCollapse: "collapse", width: "100%"  }}>
                    <tbody style={{width: '100%'  }} >                    
                    <tr style={{  marginLeft: "0px", marginRight: "50px"  }}>
                        <td className="single-section" >
                            <ul>
                                <li id="ftli"><h4>POPULAR CATEGORIES</h4></li>
                                <li id="ftli">Cars</li>
                                <li id="ftli">Flats for rent</li>
                                <li id="ftli">Jobs</li>
                                <li id="ftli">Mobile Phones</li>
                            </ul>
                        </td>
                        <td  className="single-section">
                            <ul>
                            <li id="ftli"><h4>TRENDING SEARCHES</h4></li>
                            <li id="ftli">Bikes</li>
                            <li id="ftli">Watches</li>
                            <li id="ftli">Books</li>
                            <li id="ftli">Dogs</li>
                            </ul>
                        </td>
                        <td  className="single-section">
                            <ul>
                                <li id="ftli"><h4>ABOUT US</h4></li>
                                <li id="ftli">About OLX </li>
                                <li id="ftli">OLX Blog</li>
                                <li id="ftli">Contact Us</li>
                                <li id="ftli">OLX for Businesses</li>
                            </ul>

                        </td>
                        <td >
                            <ul className="single-section">
                                <li id="ftli"><h4>OLX</h4></li>
                                <li id="ftli">Help</li>
                                <li id="ftli">Sitemap</li>
                                <li id="ftli">Legal & Privacy information</li>
                                <li id="ftli" style={{color: "#DCDCDC" }}>1</li>
                            </ul>
                        </td>
                        <td colSpan="2"  >
                            <ul className="single-section">
                                <li id="ftli"><h4>Follow Us</h4></li>
                                <li id="ftli" >
                                    <div >
                                    <FacebookIcon style={{paddingRight: 3 , borderRadius: '50%'}} /> <TwitterIcon  style={{paddingRight: 3 ,  borderRadius: '50%'}} /> <InstagramIcon style={{paddingRight: 3 , borderRadius: '50%'}} /> <YouTubeIcon style={{paddingRight: 3  , borderRadius: '50%'}} />
                                    </div>
                                </li>
                                <li id="ftli" style={{color: "#DCDCDC" }}>1</li>
                                <li id="ftli"><img src={imgAppStore} style={{width:100}} alt="olximage"/> <img src={imgGooglePlay} style={{width:100}} alt=""/></li>
                            </ul>    

                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

                    

                    
                    <div style={{backgroundColor: "#002f34", color: "white", borderTop:"1px solid #002f34", borderBottom: "1px solid #002f34", fontSize: "small"}}>
                        
                        <p style={{paddingRight:"30px"   , textAlign: 'right'}}>Free Classifieds in Pakistan &nbsp; .© 2006-2021 OLX</p>
                    

                    </div>

        
                    </div>
 

            </div>
    )
}



export default Footer;