import React, { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../api/config';
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentGeoMarker, setGeoMarker] = useState(undefined);
  const [currentUrl, setCurrentUrl] = useState(undefined);

  const runSearch = (query) => {
    const sessionData = sessionStorage.getItem(query);

    if (sessionData) {
      setImages(JSON.parse(sessionData));
      setLoading(false);
    } else {
      callApi(query);
    }
  };

  const callApi = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&has_geo=1&tags=${query}&per_page=24&format=json&extras=geo&nojsoncallback=1`,
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        sessionStorage.setItem(
          query,
          JSON.stringify(response.data.photos.photo),
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          'Encountered an error with fetching and parsing data',
          error,
        );
      });
  };

  const getGeo = ({ coords, url }) => {
    setGeoMarker(coords);
    setCurrentUrl(url);
  };

  return (
    <PhotoContext.Provider
      value={{
        images,
        loading,
        currentGeoMarker,
        runSearch,
        getGeo,
        currentUrl,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
