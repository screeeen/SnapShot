import React, { useState } from 'react';

const Thumbnail = ({ url, center, findImage }) => {
  const thumbStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '90px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: '30',
  };

  return url && center ? (
    <div style={thumbStyle} onMouseOver={() => findImage(url)}>
      <img style={thumbStyle} src={url} alt="name" />
    </div>
  ) : null;
};

export default Thumbnail;
