import React  from 'react';
import Carousel from './Carousel';
import '../../resources/styles.css';
import CountDown from './CountDown';

const Feature = () => {
    return ( 
        <div style={{ position: 'relative'}}>
            <Carousel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana Grande
                </div>
            </div>
            <CountDown />
        </div>
     );
}
 
export default Feature;
