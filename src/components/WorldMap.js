import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { PhotoContext } from '../context/PhotoContext';
import Thumbnail from './Thumbnail';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function WorldMap() {
  const { currentGeoMarker, currentUrl } = useContext(PhotoContext);
  const defaultCenter = {
    lat: -36.926658,
    lng: -73.022003,
  };
  const defaultZoom = 11;

  console.log(currentGeoMarker);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '25vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC5T9V5cwNt8AKEoeML3R4SUJ_GkKFPCZ0' }}
        defaultCenter={defaultCenter}
        center={currentGeoMarker}
        defaultZoom={defaultZoom}
      >
        <Thumbnail url={currentUrl} coords={currentGeoMarker} />
      </GoogleMapReact>
    </div>
  );
}
