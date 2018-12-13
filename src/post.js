import React from 'react';
import CommentSection from './comment-section'
import PostForm from './post-form'
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

  handleCancel(){
    this.props.handleCancel();
  }

  updatePostSubmit(post, index){
    this.props.updatePostSubmit(post, index);
  }
  
  render(){
    if(this.props.index ===this.props.editingPostIndex){
      return(
        <div className="post" index={this.props.index}>
          <PostForm 
            handleCancel={()=>this.handleCancel()}
            updatePostSubmit = {(post,index)=>this.updatePostSubmit(post,index)}
            post={this.props.post}
            index={this.props.index}
            />
          {/* <CommentSection handleNewComment={newcomment=>this.handleNewComment(newcomment)} comments={this.props.post.comments}/> */}
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