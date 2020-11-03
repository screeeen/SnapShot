import React, { useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { PhotoContext } from '../context/PhotoContext';
import Thumbnail from './Thumbnail';

export default function WorldMap() {
  const { currentGeoMarker, images, currentUrl, findImage } = useContext(
    PhotoContext,
  );
  const defaultCenter = {
    lat: -0.926658,
    lng: -73.022003,
  };
  const zoom = 1;

  const containerStyle = {
    height: '30vh',
    width: '100%',
    position: 'sticky',
    top: '100px',
    zIndex: '10',
    border: '2px solid #555',
    borderRadius: '90px !important',
  };

  const createMarkers = () => {
    return images.map((img, i) => {
      const pos = {
        lat: parseFloat(img.latitude),
        lng: parseFloat(img.longitude),
      };
      return <Marker key={i} position={pos} />;
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentGeoMarker || defaultCenter}
        zoom={zoom}
      >
        {createMarkers()}
      </GoogleMap>
    </LoadScript>
  );
}
