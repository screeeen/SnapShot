import React from 'react';

const Image = ({ url, title, showGeo, photo_id }) => (
  <li>
    <img src={url} alt={title} onMouseOver={() => showGeo(photo_id)} />
  </li>
);

export default Image;
