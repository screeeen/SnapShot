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

  //   const renderMarkers = (map, maps) => {
  //     let marker = new maps.Marker({
  //       position: currentGeoMarker,
  //       map,
  //       animation: window.google.maps.Animation.DROP,
  //       title: '',
  //     });
  //     return marker;
  //   };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: '30vh',
        width: '100%',
        position: 'sticky',
        top: '100px',
        zIndex: '10',
        borderRadius: '90px !important',
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC5T9V5cwNt8AKEoeML3R4SUJ_GkKFPCZ0' }}
        defaultCenter={defaultCenter}
        center={currentGeoMarker}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        // onChange={({ map, maps }) => renderMarkers(map, maps)}
      >
        <Thumbnail center={currentGeoMarker} url={currentUrl} />
      </GoogleMapReact>
    </div>
  );
}
