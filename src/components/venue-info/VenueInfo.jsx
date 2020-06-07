import React from 'react';
import calendar_icon from '../../resources/images/icons/calendar.png';
import location_icon from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {

    return (
        <div className="bck_black"> 
            <div className="center_wrapper">
                <div className="vn_wrapper">
               <Zoom duration={1000}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red">

                                </div>
                                <div className="vn_icon"
                                    style={{
                                        background: `url(${calendar_icon})`
                                    }}
                                >

                                </div>
                                <div className="vn_title">
                                     Event Date & Time   
                                </div>
                                <div className="vn_desc">
                                    11 Dec 2020 @10.00 PM    
                                </div>
                            </div>

                        </div>
                    </div>
                    </Zoom>
                    <Zoom duration={1000}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow">

                                </div>
                                <div className="vn_icon"
                                    style={{
                                        background: `url(${location_icon})`
                                    }}
                                >

                                </div>
                                <div className="vn_title">
                                     Event Date & Time   
                                </div>
                                <div className="vn_desc">
                                    11 Dec 2020 @10.00 PM    
                                </div>
                            </div>

                        </div>
                    </div>
                    </Zoom>
                </div>
           
            </div>
        </div>
    )

}

export default VenueInfo;