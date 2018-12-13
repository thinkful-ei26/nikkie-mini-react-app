import React from 'react';
import SearchFriend from './search-friends'
import './navbar-list.css'

export default class NavBarList extends React.Component {
  handleSearchFriend(friend){
    this.props.handleSearchFriend(friend);
    console.log('MADE IT TO NAVBAR LIST');
  }

  render(){
    console.log('IN NAVBARLIST', this.props);
    return (
      <div className="collapse">
          <input className ="checkbox" type="checkbox"></input>
          <div id="raptor_button"><div></div><div></div><div></div></div>
          <SearchFriend 
            searchFriend={this.props.searchFriend} 
            handleSearchFriend={friend=>this.handleSearchFriend(friend)} 
          />
          <div className="filler"></div>
            <a href="#">
              About
            </a>
            <a href="#">
              Settings
            </a>
            <a href="#">
              Profile
            </a>      
      </div>
  );
  }
  
}

//if window size is less than 750px, collapse navbar and have a hamburger icon that drops down the navbar