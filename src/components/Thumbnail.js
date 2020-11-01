import React from 'react';

const Thumbnail = ({ url, title, getGeo, coords }) => {
  const thumbStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid black',
  };

  return (
    <li>
      <img style={thumbStyle} src={url} alt={title} />
    </li>
  );
};

export default Thumbnail;
