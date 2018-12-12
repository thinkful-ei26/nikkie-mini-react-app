import React from 'react';

import './new-post-form.css'

export default class NewPostForm extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      title: '',
      content: '',
      category: '',
      comments:'',
    };
  } 

  handleSubmit(e){
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render(){
    return(
      <form className="new-post-form" onSubmit={e=>this.handleSubmit(e)}>
      <h2>Create A New Post</h2>
      <fieldset>
      <input 
          type="text" 
          name="title" 
          required
          placeholder="Title" 
          onChange={e=>this.setState({title:e.target.value})}>
        </input>
        <input 
          type="text" 
          name="content" 
          required
          placeholder="content" 
          onChange={e=>this.setState({content:e.target.value})}>
        </input>
        <select onChange={e=>this.setState({category:e.target.value})} required>
          <option value="" selected disabled>Select A Category</option>
          <option value="Book">Book</option>
          <option value="Show">Show</option>
        </select>
      </fieldset>
        
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={()=>this.props.onCancel()} >Cancel</button>
        </div>
      </form>
    );
  }

}

//no spaces around equal

//you cant set state in render, BUT if its after an arrow fn its not really in render