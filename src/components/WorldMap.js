import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { PhotoContext } from '../context/PhotoContext';
import Thumbnail from './Thumbnail';

export default function WorldMap() {
  const { currentGeoMarker, currentUrl, findImage } = useContext(PhotoContext);
  const defaultCenter = {
    lat: -36.926658,
    lng: -73.022003,
  };
  const defaultZoom = 11;

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: '30vh',
        width: '100%',
        position: 'sticky',
        top: '100px',
        zIndex: '10',
        border: '2px solid #555',
        borderRadius: '90px !important',
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultCenter}
        center={currentGeoMarker}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Thumbnail
          center={currentGeoMarker}
          url={currentUrl}
          findImage={findImage}
        />
      </GoogleMapReact>
    </div>
  );
}
