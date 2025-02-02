import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import MapComponent from '../components/MapComponent';
import SearchBox from '../components/SearchBox';

function LocationFinder(){

    const libraries = ['places']; // Load the Places library for Autocomplete
    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBamFkhRtyeq4eonG3rT8FkwVJxViLW6tc', // Replace with your API key
        libraries,
      });
    
      const [markers, setMarkers] = useState([]);
      const [center, setCenter] = useState({ lat: -34.397, lng: 150.644 });
    
      if (loadError) return <div>Error loading maps</div>;
      if (!isLoaded) return <div>Loading...</div>;
    
      const handlePlaceSelected = (location) => {
        setCenter(location);
        setMarkers((prev) => [...prev, { position: location }]);
      };
      
      return (
         <div className="banner-section section parallax-window" data-parallax="scroll">
         <div className="container">
        <h1>Residential Land Finder</h1>
        <SearchBox onPlaceSelected={handlePlaceSelected} />
        <MapComponent center={center} markers={markers} />
      </div>
      </div>);


}

export default LocationFinder;