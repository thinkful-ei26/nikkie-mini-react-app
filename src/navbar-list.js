import React from 'react';
import './navbar-list.css'

export default function NavBarList(props) {

  return (
      <div className="collapse">
      <input type="checkbox"></input>
        <div id="raptor_button"><div></div><div></div><div></div></div>
        <a>
          About
        </a>
        <a>
          Settings
        </a>
        <a>
          Profile
        </a>      
      </div>
  );
}

//if window size is less than 750px, collapse navbar and have a hamburger icon that drops down the navbar