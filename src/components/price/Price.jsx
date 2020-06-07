import React from 'react';
import ButtonComponent from '../button/ButtonComponent';
import Bounce from 'react-reveal/Bounce';

const Price = () => {
    return ( 
        <div className="bck_black">
            <div className="center_wrapper pricing_section" >
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                <Bounce left>
                <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <h2>$100</h2>
                                <span>BALCONY</span>
                            </div>
                            <div className="pricing_description">
                            Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.
                            </div>
                            <div className="pricing_buttons">
                                 <ButtonComponent label="Purchase Tickets" />
                            </div>
                        </div>
                    </div>
                    </Bounce>
                    <Bounce top>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <h2>$150</h2>
                                <span>MEDIUM</span>

                            </div>
                            <div className="pricing_description">
                            Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.
                            </div>
                            <div className="pricing_buttons">
                                 <ButtonComponent label="Purchase Tickets" />
                            </div>
                        </div>
                    </div>
                    </Bounce>
                    <Bounce right>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <h2>$200</h2>
                                <span>STAR</span>

                            </div>
                            <div className="pricing_description">
                                Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.
                            </div>
                            <div className="pricing_buttons">
                                 <ButtonComponent label="Purchase Tickets" />
                            </div>
                        </div>
                       
                    </div>
                </Bounce>
                </div>
            </div>
        </div>
     );
}
 
export default Price;