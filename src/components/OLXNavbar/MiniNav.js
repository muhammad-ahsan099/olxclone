
import React from 'react';
import './olxNavbar.css'
import FadeMenu from '../dummyTesting/dummyTesting';
import { Link } from 'react-router-dom';
function MiniNav() {
    return (
        <div>

            <div position="relative" style={{ backgroundColor: "white", display: "flex" , lineHeight: '50px', marginTop: "75px", boxShadow: "0px 1px 7px 0px silver", zIndex: "1", }}>
               
                < FadeMenu    />
                {/* <input type="button" value="ALL CATEGORIES" id="megaMenu" /> */}
                <Link to="/mobiles" id='Li'>Mobile &nbsp;Phones  </Link>
                <Link to="/cars" id='Li'>Cars</Link>
                <Link to="/mens" id='Li'>Motorcycle</Link>
                <Link to="/fans" id='Li'>Houses</Link>
                <Link  to="/mobiles" id="Li">TV-Video-Audio</Link>
                <Link to="/mobiles" id="Li">Tablets</Link>
                <Link to="/mobiles" id="Li">Land&nbsp;&nbsp; Plots</Link>
            </div>

        </div>
    )
}

export default MiniNav;