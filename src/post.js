import React from 'react';
import CommentSection from './comment-section'

import './post.css'

export default class Post extends React.Component {

  handleNewComment(newcomment){
    this.props.handleNewComment(newcomment, this.props.index)
  }
  
  render(){
    return (
      <div className="post" key={this.props.key}>
        <h3 className='left'>{this.props.post.title}</h3>
        <h3 className='right'>{this.props.post.category}</h3>
        <p>{this.props.post.content}</p>
        <CommentSection handleNewComment={newcomment=>this.handleNewComment(newcomment)} comments={this.props.post.comments}/>
      </div>
    );
  }

}

//should send the new comment here 
//at this point, send up additional info about which post it is with the key