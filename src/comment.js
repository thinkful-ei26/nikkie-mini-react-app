import React from 'react';

import './comment.css'

export default function Comment(props) {

  return (
    <li>
      {props.comment.message}
      <span className = "time"> {props.comment.time} </span>
    </li>
  );
}