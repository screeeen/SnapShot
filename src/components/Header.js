import React from 'react';
import Form from './Form';
import Navigation from './Navigation';

const Header = ({ history, handleSubmit }) => (
  <>
    <h1>SnapShot</h1>
    <Form history={history} handleSubmit={handleSubmit} />
    <Navigation />
  </>
);

export default Header;
