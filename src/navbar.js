import React from 'react';
import NavBarList from './navbar-list'

import './navbar.css'

export default class NavBar extends React.Component {

  constructor(props) {

      super(props);

      this.state={
        collapsed:false,
      };
  }

  render(){
    return (
      <nav className = "navbar">
        <NavBarList/>
        {/* <HamburgerIcon/> */}
      </nav>
    );
  }
}

//if window size is less than 750px, collapse navbar and have a hamburger icon that drops down the navbar