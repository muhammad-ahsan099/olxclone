
import React from 'react' 
import SlideImage from '../../components/SlideImage/slideImg';
import Products from '../../components/Products/Product';
import GetApp from '../../components/GetAppSection/GetApp';
import OriginalNavbar from '../../components/OLXNavbar/OriginalNavbar';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
    return(
        <div>
            
            <OriginalNavbar/>
            <SlideImage />
            <Products />
            <GetApp/>
            <Footer />
            

        </div>
    )
    
}

export default LandingPage;