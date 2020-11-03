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
  const zoom = 3;

  const containerStyle = {
    height: '30vh',
    width: '100%',
    margin: 0,
    padding: 0,
  };

  const sticky = {
    position: 'sticky',
    top: '0vh',
    zIndex: '10',
    margin: 0,
    padding: 0,
  };

  const createMarkers = () => {
    return images.map((img, i) => {
      const pos = {
        lat: parseFloat(img.latitude),
        lng: parseFloat(img.longitude),
      };
      const id = img.id;
      return (
        <Marker key={i} position={pos} onMouseOver={() => findImage({ id })} />
      );
    });
  };

  return (
    <div style={sticky}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentGeoMarker || defaultCenter}
          zoom={zoom}
        >
          {createMarkers()}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
