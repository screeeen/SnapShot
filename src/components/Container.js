import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Gallery from './Gallery';
import Loader from './Loader';

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      <h3>Click on the pics to see the markers</h3>
      <h3>Click on the markers to see the pics</h3>
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
