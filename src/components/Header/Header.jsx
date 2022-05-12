import React from "react";

const Header = (props) => {
  return (
    <header className="header container">
      <h1 className="heading logo">Bangkok Express</h1>
      <h3 className="subheading">Great food・Free delivery・Fair price</h3>
      <div data-cart-icon-holder></div>
    </header>
  );
};

export default Header;
