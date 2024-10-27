import React from 'react';
import { MdEditNote } from "react-icons/md";

const Header = ({ title = "to do list" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
