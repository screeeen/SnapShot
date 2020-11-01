import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import WorldMap from './WorldMap';
import Gallery from './Gallery';
import Loader from './Loader';

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  const { latitude, longitude } = images;

  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      <WorldMap center={(latitude, longitude)} />
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
