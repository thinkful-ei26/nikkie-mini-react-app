import React from 'react';


export default class NewPostForm extends React.Component{

  handleSubmit(e){
    console.log('in handle submit');
    e.preventDefault();
    this.props.onSave('saved');
  }

  render(){
    return(
      <form className="new-post-form" onSubmit={e=>this.handleSubmit(e)}>
        <input type = "text"></input>
        <button type = "submit">Save</button>
        <button onClick = {()=>this.props.onCancel()} type = "button">Cancel</button>
      </form>
    );
  }

}