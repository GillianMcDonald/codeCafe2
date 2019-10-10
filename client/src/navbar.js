import React from 'react';
import image from "./images/coffeeLogo.png";
import './navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarContainer">
          <div className="content">
          <div id="logo">
              
                  
                  <img id="logoText" src ={image} alt="Coffee logo" height= "145px" width = "200px"/>
              
          </div>

          <div id="title">
              <h1>Coder's Cafe</h1>
          </div>

          <div id="S">
              
              <menu></menu>
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Navbar;