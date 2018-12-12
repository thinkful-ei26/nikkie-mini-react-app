import React from 'react';


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
        <input 
          type = "text" 
          name="title" 
          placeholder="Title" 
          value={this.state.title} 
          onChange={e=>this.handleTitleChange(e)}>
        </input>
        <input 
          type = "text" 
          name="content" 
          placeholder="content" 
          value={this.state.content} 
          onChange={e=>this.handleContentChange(e)}>
        </input>
        <select onChange={e=>this.handleCategoryChange(e)}>>
          <option value="" selected disabled>Select A Category</option>
          <option value="TryIt">TryIt</option>
          <option value="DoneIt">DoneIt</option>
        </select>
        <button type = "submit">Save</button>
        <button type = "button" onClick = {()=>this.props.onCancel()} >Cancel</button>
      </form>
    );
  }

}

//I feel like the way I'm grabbing inputs is overkill. Should I be doing it with ref? Less fns? Do I have too much state?