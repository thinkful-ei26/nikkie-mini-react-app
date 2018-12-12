import React from 'react';
import Post from './post'


export default class PostSection extends React.Component {

  handleNewComment(newcomment, index){
    this.props.handleNewComment(newcomment, index)
  }

  render(){
    return (
      <div className="posts-section">
        {this.props.posts.map((post,index)=> <Post handleNewComment={(newcomment,index)=>this.handleNewComment(newcomment, index)} post={post} key={index} index={index} />)}
      </div>
    );
  }
}