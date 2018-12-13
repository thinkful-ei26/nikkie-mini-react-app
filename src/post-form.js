import React from 'react';

import './post-form.css'

export default class PostForm extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      title: this.props.post ? this.props.post.title : '',
      content: this.props.post ? this.props.post.content : '',
      category: this.props.post ? this.props.post.category : '',
      comments: this.props.post ? this.props.post.comments: '',
    };
  } 

  handleCancel(){
    this.props.handleCancel();
  }

  handleSubmit(e){
    console.log('here in post');
    e.preventDefault();
    this.props.updatePostSubmit(this.state, this.props.index);
  }
  
  render(){
    //sneakily: handling which dropdown option is chosen: 
    let cell = [true,false,false];
    if(this.state.category!==""){
      console.log('in here');
      const options=['None','Book', 'Show'];
      cell = options.map(option=>option===this.state.category? true : false)
      cell[this.state.index] = 'selected';
    }

    return(
        <form className ="post-form" onSubmit={e=>this.handleSubmit(e)}>
          <input 
            type="text" 
            value={this.state.title}
            name="title" 
            required
            placeholder="Title" 
            onChange={e=>this.setState({title:e.target.value})}>
          </input>
          <select onChange={e=>this.setState({category:e.target.value})} required>
            <option value="" selected={cell[0]} disabled>Select A Category</option>
            <option selected={cell[1]} value="Book">Book</option>
            <option selected={cell[2]} value="Show">Show</option>
          </select>
          <input 
            type="text" 
            value={this.state.content}
            name="content" 
            required
            placeholder="content" 
            onChange={e=>this.setState({content:e.target.value})}>
          </input>
          <div className='buttons'>
            <button type="submit">Save</button>
            <button type="button" onClick={()=>this.handleCancel()} className="delete-post">Cancel</button>  
          </div>
          {/* How can I remember which one of these are chosen pn update? */}
        </form>
      );
  }
}

//should send the new comment here 
//at this point, send up additional info about which post it is with the key