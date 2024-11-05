import React from 'react';

const Header = ({ title = "to do list" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header; 
