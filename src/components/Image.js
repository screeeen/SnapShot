import React from 'react';

const Image = ({ url, title, getGeo, coords }) => (
  <li>
    <img src={url} alt={title} onMouseOver={() => getGeo({ coords, url })} />
  </li>
);

export default Image;
