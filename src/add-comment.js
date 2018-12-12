import React from 'react';

import './add-comment.css'

export default class AddComment extends React.Component {

  handleSubmit(e){
    let timestamp=Date.now(); 
    timestamp=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);

    console.log('handling submit for new comment');
    e.preventDefault();
    const newcomment={message: this.textInput.value, time: timestamp};
    this.textInput.value = '';
    console.log('the new comment is', newcomment);
    this.props.onAddComment(newcomment);
  }

  render(){
    return (
      <form className = "add-comment-form" onSubmit={e=>this.handleSubmit(e)}>
        <input
          className = "add-comment-input"
          name="add-comment"
          type="text" 
          placeholder="Enter Your Comment Here" 
          required
          // value={props.searchTerm}
          ref={input => this.textInput=input}>
        </input>
        <button type="submut">Comment</button>
      </form>  
    );
  }
}

//QUESTION: Does textarea not have value here? When do I use it, when shoudlnt I?
//Manage comp vs unmanaged comp: managed comp, state tracks its value. If there's an unmanaged comp, you query its value. 
//So you need to keep the value when it's 2way, and changing it will change something else. like in search. But in these forms, its 1way. It's uncontrolled, and thats fine