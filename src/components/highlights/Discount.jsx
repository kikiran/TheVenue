import React, {Component} from 'react';
import ButtonComponent from '../button/ButtonComponent';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import CountUp from 'react-countup';

class Discount extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div className="center_wrapper">
                <div className="discount_wrapper">
                <Fade bottom>
                    <div className="discount_porcentage">
                        <CountUp 
                        start={0}
                        end={28}
                        duration={3.75}
                        suffix="%"
                        >
                          
                        </CountUp>
                        <span>Off</span>
                    </div>
                </Fade>
                <Slide right >
                    <div className="discount_description">
                        <h3>Purchase tickets before Nov 30 2020</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <ButtonComponent  label="Price"/>

                    </div>
                </Slide>
                </div>
            </div>
         );
    }
}
 
export default Discount;