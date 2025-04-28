import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, Circle, Autocomplete } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const GoogleMapComponent = () => {
  
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // Default India
  const autocompleteRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  const googleMapsApiKey = 'AIzaSyBamFkhRtyeq4eonG3rT8FkwVJxViLW6tc';

  const containerStyle = {
    width: '100%',
    height: '500px',
  };
  
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const handleMapClick = async (e) => {
    
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setSelectedLocation({ lat, lng });
    setMapCenter(lat,lng);
    setMarkers((current) => [
      ...current,
      {
        lat: lat,
        lng: lng,
        time: new Date(),
      },
    ]);
   };

   const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setMapCenter(location);
      } else {
        alert("No details available for input: '" + place.name + "'");
      }
    }
  };

  return (
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['places']}>
        
        {/* Search Box */}
        <div className="mb-3">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Search a location"
              className="form-control"
              style={{ width: '300px', margin: 'auto' }}
            />
          </Autocomplete>
        </div>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={selectedLocation ? 10 : 8 }
          onClick={handleMapClick}
          options={mapOptions}
        >
          {selectedLocation && (
            <>
            {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={selectedLocation}
          />
        ))}
        </>
          )}
        </GoogleMap>
      </LoadScript>
  );
}

export default GoogleMapComponent;
