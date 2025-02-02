import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const libraries = ['places']; // Load the Places library for Autocomplete

/* const center = {
  lat: -34.397, // Default latitude
  lng: 150.644, // Default longitude
}; */

const MapComponent = ({ center,markers }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBamFkhRtyeq4eonG3rT8FkwVJxViLW6tc', // Replace with your API key
    libraries
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
