import React from 'react';

export default function Post(props) {
  // let posts;

  // for(let i = 0; i < props.posts.length; i++){
  //   posts.push(
  //     <Post post={props.posts[i]} />
  //   )
  // }
  
  return (
    <div className = "post">
      <h3>{props.post.title}-{props.post.category}</h3>
      <p>{props.post.content}</p>
    </div>
  );
}