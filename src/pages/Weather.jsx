import { React } from 'react';
import GoogleMapCompnent from '../components/GoogleMapCompnent';
const Weather = ()=> {

    return (
        <section className="section light-background"> 
        <div className="container section-title" data-aos="fade-up">
        <h2>Weather</h2>
        <p>*****</p>
      </div>
      <GoogleMapCompnent />
      </section>
    )

};

export default Weather;