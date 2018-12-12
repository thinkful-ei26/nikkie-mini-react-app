import React from 'react';

import './new-post-form.css'

export default class NewPostForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      category: '',
    };
}

  handleTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  handleContentChange(e){
    this.setState({
      content: e.target.value
    })
  }

  handleCategoryChange(e){
    this.setState({
      category: e.target.value
    })
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
          type = "text" 
          name="title" 
          required
          placeholder="Title" 
          value={this.state.title} 
          onChange={e=>this.handleTitleChange(e)}>
        </input>
        <input 
          type = "text" 
          name="content" 
          required
          placeholder="content" 
          value={this.state.content} 
          onChange={e=>this.handleContentChange(e)}>
        </input>
        <select onChange={e=>this.handleCategoryChange(e)} required>
          <option value="" selected disabled>Select A Category</option>
          <option value="Book">Book</option>
          <option value="Show">Show</option>
        </select>
      </fieldset>
        
        <div className = "buttons">
          <button type = "submit">Save</button>
          <button type = "button" onClick = {()=>this.props.onCancel()} >Cancel</button>
        </div>
      </form>
    );
  }

}

//I feel like the way I'm grabbing inputs is overkill. Should I be doing it with ref? Less fns? Do I have too much state?