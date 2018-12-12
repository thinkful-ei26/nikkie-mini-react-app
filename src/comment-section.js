import React from 'react';
import Comment from './comment'

import './comment-section.css'

export default function CommentSection(props) {
  let comments =[];

  for(let i = 0; i < props.comments.length; i++){
    comments.push(
      <Comment comment={props.comments[i]} key = {i} />
    )
  }

  return (
    <ul className = "comment-section">
      {comments}
    </ul>
  );
}