import React from 'react';
import CommentSection from './comment-section'

import './post.css'

export default class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      title: this.props.post.title,
      content: this.props.post.content,
      category: this.props.post.category,
      comments:this.props.post.comments,
    };
  } 

  handleNewComment(newcomment){
    this.props.handleNewComment(newcomment, this.props.index)
  }

  handleDeletePost(){
    this.props.handleDeletePost(this.props.index)
  }

  handleEditPost(){
    this.props.handleEditPost(this.props.index)
  }

  handleCancelUpdate(){
    this.props.handleCancelUpdate();
  }

  handleSubmit(e){
    console.log('here in post');
    e.preventDefault();
    this.props.updatePostSubmit(this.state, this.props.index);
  }
  
  render(){
    if(this.props.index ===this.props.editingPostIndex){
      return(
        <div className="post" index={this.props.index}>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <input 
            type="text" 
            value={this.state.title}
            name="title" 
            required
            placeholder="Title" 
            onChange={e=>this.setState({title:e.target.value})}>
          </input>
          <input 
            type="text" 
            value={this.state.content}
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
          <button type="submit">Update</button>
          <button type="button" onClick={()=>this.handleCancelUpdate()} className="delete-post">Cancel</button>
          {/* How can I remember which one of these are chosen pn update? */}
        </form>
          <CommentSection handleNewComment={newcomment=>this.handleNewComment(newcomment)} comments={this.props.post.comments}/>
        </div>
      );
    }
    else{
      return (
        <div className="post" index={this.props.index}>
            <h3 className='left'>{this.props.post.title}</h3>
            <h3 className='right'>{this.props.post.category}</h3>
            <p>{this.props.post.content}</p>
          <CommentSection handleNewComment={newcomment=>this.handleNewComment(newcomment)} comments={this.props.post.comments}/>
          <button onClick={()=>this.handleEditPost()} className="edit-post">Edit This Post</button>
          <button onClick={()=>this.handleDeletePost()} className="delete-post">Delete This Post</button>
        </div>
      );
    }
  }
}

//should send the new comment here 
//at this point, send up additional info about which post it is with the key