import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import NoImages from './NoImages';
import Image from './Image';

const Gallery = (props) => {
  const { getGeo, currentId } = useContext(PhotoContext);

  const results = props.data;
  let images;
  let noImages;

  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let coords = {
        lat: parseFloat(image.latitude),
        lng: parseFloat(image.longitude),
      };
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      let selected = id === currentId;
      return (
        <Image
          url={url}
          key={id}
          alt={title}
          getGeo={getGeo}
          coords={coords}
          selected={selected}
        />
      );
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }

  return (
    <>
      <ul>{images}</ul>
      {noImages}
    </>
  );
};

export default Gallery;
