import React, { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';

const SearchBox = ({ onPlaceSelected }) => {
  const autocompleteRef = useRef(null);

  return (
    <Autocomplete
      onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
      onPlaceChanged={() => {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry) {
          onPlaceSelected({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      }}
    >
      <input
        type="text"
        placeholder="Search for a location"
        style={{ width: '300px', padding: '10px' }}
      />
    </Autocomplete>
  );
};

export default SearchBox;