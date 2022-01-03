import React, { Component } from "react";
import imgfile from "./baby_bright.png";
import "./Logo.css";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logoimg" src={imgfile} />
      </div>
    );
  }
}

export default Logo;
