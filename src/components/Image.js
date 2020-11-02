import React from 'react';

const Image = ({ url, title, getGeo, coords, selected }) => (
  <li className={selected ? 'highlighted' : null}>
    <img src={url} alt={title} onMouseOver={() => getGeo({ coords, url })} />
  </li>
);

export default Image;
