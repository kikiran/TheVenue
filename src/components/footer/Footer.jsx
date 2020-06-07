import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return ( 

        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous header_logo_venue">
                    The Venue
                </div>
                <div className="footer_copyright">
                    The Venue <span>&copy;</span> 2020 all rights resevered.
                </div>
            </Fade>
        </footer>
     );         
}
 
export default Footer;

