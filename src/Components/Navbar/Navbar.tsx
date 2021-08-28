import React, { Component } from "react";
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="links_container">links</div>
        <div className="logo_container">logo img</div>
        <div className="tools_container">tools</div>
      </div>
    );
  }
}
