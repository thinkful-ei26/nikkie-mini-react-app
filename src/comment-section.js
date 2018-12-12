import React from 'react';
import Comment from './comment'
import AddComment from './add-comment'

import './comment-section.css'

export default class CommentSection extends React.Component {

  handleNewComment(newcomment){
    this.props.handleNewComment(newcomment);
  }

  render(){
    let comments =[];

    for(let i=0; i < this.props.comments.length; i++){
      comments.push(
        <Comment comment={this.props.comments[i]} key={i} />
      )
    }

    return (
      <div className="comment-section">
        <ul className="comment-list">
          {comments}
        </ul>
        <AddComment onAddComment={newcomment=>this.handleNewComment(newcomment)}/>
      </div>
  
    );
  }
}
//QUESTION: it doesnt know to re-render bc the new comment needs to change the state of the parent which is all the way up in blog-page... what do I do???