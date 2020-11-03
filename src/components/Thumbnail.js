import React from 'react';

const Thumbnail = ({ url, findImage }) => {
  const thumbStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '90px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: '30',
  };

  return (
    <div style={thumbStyle} onMouseOver={() => findImage({ url })}>
      <img style={thumbStyle} src={url} alt="name" />
    </div>
  );
};

export default Thumbnail;
