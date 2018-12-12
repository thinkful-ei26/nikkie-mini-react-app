import React from 'react';
import CommentSection from './comment-section'

import './post.css'

export default function Post(props) {
  
  return (
    <div className = "post" key = {props.post.key}>
      <h3>{props.post.title}-{props.post.category}</h3>
      <p>{props.post.content}</p>
      <CommentSection comments = {props.post.comments}/>
    </div>
  );
}