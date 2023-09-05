import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

function MyComponent() {
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound: (location) => {
      console.log('location found:', location);
    },
  });
  return null;
}

function MyMapComponent() {
  const centerCoordinates = [27.7172, 85.3240];

  return (
    <MapContainer center={centerCoordinates} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyComponent />
    </MapContainer>
  );
}

export default MyMapComponent;
