import React from 'react';

const Thumbnail = ({ url, center }) => {
  const thumbStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid black',
    position: 'absolute',
    zIndex: '11',
  };

  // const { lat, lng } = center;
  console.log(url, center);
  return url && center ? <img style={thumbStyle} src={url} alt="" /> : null;
};

export default Thumbnail;
