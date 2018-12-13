import React from 'react';
import  SearchFriendResult from './search-friend-result'
import './search-friends.css'

export default class SearchFriend extends React.Component{

  handleSearchFriend(e){
    this.props.handleSearchFriend(e.target.value);
    console.log('in search friends, the search is', e.target.value);
  }

    render(){
      console.log('IN SEARCH FRIENDS, props are',this.props);
      let results;
      if(this.props.searchFriend){
        results = <SearchFriendResult searchFriend={this.props.searchFriend}/>
      }

      return (
        <div className="search-friends" >
          <input 
            type="search" 
            placeholder="Search For Friends" 
            value ={this.props.searchFriend} 
            onChange={e=>this.handleSearchFriend(e)}>
          </input>
          {results}
        </div>  
      );
    }
  }

  // QUESTION: search  friends not working
