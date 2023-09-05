import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { geocode } from 'nominatim-browser';
import Search from './Search';

function MyComponent({ destinationCoordinates, distance }) {
  const map = useMap();

  return (
    <div>
      {destinationCoordinates && (
        <div>
          <p>Destination Location:</p>
          <p>Latitude: {destinationCoordinates[0]}</p>
          <p>Longitude: {destinationCoordinates[1]}</p> 
          <p>Distance from Current Location: {distance} km</p>
        </div>
      )}
    </div>
  );
}

function calculateDistance(lat1, lon1, lat2, lon2) {

  const R = 6371;
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance.toFixed(2);
 
}

function MyMapComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;
        setCurrentLocation([currentLat, currentLng]);
      });
    }
  }, []);

  const centerCoordinates = currentLocation || [27.7172, 85.3240]; 
  const handleSearch = async () => {
    console.log('Search button clicked'); 
    if (searchQuery.trim() === '') return;
  

    try {
      const results = await geocode({
        q: searchQuery,
        addressdetails: true,
        limit: 1, 
      });

      if (results.length > 0) {
        const result = results[0]; 
        const newDestinationCoordinates = [parseFloat(result.lat), parseFloat(result.lon)];

       
        const newDistance = calculateDistance(
          currentLocation[0],
          currentLocation[1],
          newDestinationCoordinates[0],
          newDestinationCoordinates[1]
        );

        setDestinationCoordinates(newDestinationCoordinates);
        setDistance(newDistance);
      }
    } catch (error) {
      console.error('Error while geocoding:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="searchQuery"
        placeholder="Search for a place"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
     <button onClick={handleSearch}>Search</button>

      <MapContainer center={centerCoordinates} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {currentLocation && (
          <Marker position={currentLocation}>
            <Popup>Your Current Location</Popup>
          </Marker>
        )}
        {destinationCoordinates && (
          <Marker position={destinationCoordinates}>
            <Popup>Destination Location</Popup>
          </Marker>
        )}
        <MyComponent destinationCoordinates={destinationCoordinates} distance={distance} />
      </MapContainer>
    </div>
  );
}

export default MyMapComponent;
