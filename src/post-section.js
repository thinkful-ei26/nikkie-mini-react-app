import React from 'react';
import Post from './post'


export default function PostSection(props) {
  let posts =[];

  for(let i = 0; i < props.posts.length; i++){
    posts.push(
      <Post post={props.posts[i]} key = {i} />
    )
  }
  
  return (
    <div className = "posts-section">
      {posts}
    </div>
  );
}