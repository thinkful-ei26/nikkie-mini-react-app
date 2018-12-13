import React from 'react';
import Post from './post'


export default class PostSection extends React.Component {

  handleNewComment(newcomment, index){
    this.props.handleNewComment(newcomment, index)
  }

  handleDeletePost(postIndex){
    this.props.handleDeletePost(postIndex)
  }

  handleEditPost(postIndex){
    this.props.handleEditPost(postIndex)
  }

  handleCancel(){
    this.props.handleCancel();
  }

  updatePostSubmit(post,index){
    console.log('in post section');
    this.props.updatePostSubmit(post,index);
  }

  render(){
    return (
      <div className="posts-section">
        {this.props.posts.map((post,index)=> 
          <Post 
            handleNewComment={(newcomment,index)=>this.handleNewComment(newcomment, index)}
            handleDeletePost={(postIndex)=>this.handleDeletePost(postIndex)}
            handleEditPost={(postIndex)=>this.handleEditPost(postIndex)}
            handleCancel={()=>this.handleCancel()}
            updatePostSubmit={(post,index)=>this.updatePostSubmit(post,index)}
            post={post} 
            editingPostIndex={this.props.editingPostIndex}
            key={index} 
            index={index} />)}
      </div>
    );
  }
}