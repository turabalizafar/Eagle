import React from 'react';

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Eagle Wood Works</p>
    <p>
      <a href="#home">Home</a> | <a href="#about">About</a> |{' '}
      <a href="#contact">Contact</a>
    </p>
  </footer>
);

export default Footer;
