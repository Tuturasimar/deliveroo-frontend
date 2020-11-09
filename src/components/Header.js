import React from "react";
import Logo from "../images/logo-deliveroo.png";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div className="header">
      <img alt="logo" src={Logo} />

      <div className="header-bot">
        <div className="header1">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img alt="restau" src={`${data.restaurant.picture}`} />
      </div>
    </div>
  );
};

export default Header;
