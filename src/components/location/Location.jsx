import React from 'react';

const Location = () => {
    return ( 

        <div className="location_wrapper"> 
            <iframe
                src="https://www.google.com/maps/place/Arlington,+TX,+USA/@32.7020541,-97.2755007,11z/data=!3m1!4b1!4m13!1m7!3m6!1s0x864c19f77b45974b:0xb9ec9ba4f647678f!2sDallas,+TX,+USA!3b1!8m2!3d32.7766642!4d-96.7969879!3m4!1s0x864e62d2e40898d3:0xb5ef6ac1fa05351!8m2!3d32.7355953!4d-97.1081543"
                width='100%'
                height="500px"
                title='iframe'
                frameBorder='0'
                allowFullScreen
                is="x-frame-bypass"

            ></iframe>
            <div className="location_tag">
                location
            </div>
        </div>
     );
}
 
export default Location;