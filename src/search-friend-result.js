import React from 'react';

import './search-friend-result.css'

export default class SearchFriendResult extends React.Component {

  constructor(props){
    super(props)

    this.state={
      friends:['Nikkie Mashian', 'Nate Pazooky', 'Josh Sadik', 'Ariella Farzan'],
    }
  }
  render(){
    let friends=this.state.friends.filter(friend=>friend.toLowerCase().includes(this.props.searchFriend));

    const friendListElements = friends.map(friend=>{
      return (
        <li>
          {friend}
        </li>
      )
    })

    return (
      <ul className="search-friend-result">
        {friendListElements}
      </ul>
    );
  }
}

