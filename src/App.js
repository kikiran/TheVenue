import React from 'react';
import Header from './components/header/Header';
import Feature from './components/slider/Feature';
import VenueInfo from './components/venue-info/VenueInfo';
import HighLights from './components/highlights/Highlights';
import Price from './components/price/Price';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
  <div className="App" >
  <Element name="Event Starts In">
    <Header />
    </Element>
    
      <Feature />
   
    <Element name="Venue Info">
    <VenueInfo />
    </Element>
    <Element name="Highlights">
    <HighLights/>
    </Element>
    <Element name="Pricing">

    <Price />
    </Element>
    <Element name="Info">

    <Location />
    </Element>
    <Footer />
  </div>
  )
}

export default App;
