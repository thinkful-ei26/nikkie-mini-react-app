import React from 'react';
import PostSection from './post-section'
import NewPostForm from './new-post-form'

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          posts:[
            {title: 'Poison Study', content: 'Great read', category: 'Book'},
            {title: 'Handmaids Tale', content: 'Crazy show', category: 'Show'},
          ],
          adding: false,
        };
    }

    addingPost(bool){
      this.setState({
        adding: bool,
      })
    }

    savePost(post){
      this.setState({
        posts: [...this.state.posts, post],
        adding: false,
      })
    }

    render() {
      console.log('THE STATE IS NOW', this.state);
        if(this.state.adding){
          return(
             <NewPostForm onSave ={post=>this.savePost(post)} onCancel={()=>this.addingPost(false)}/>
          );
        }
        else{
          return (
            <div className = "blog-page">
              <PostSection posts={this.state.posts}/>
              <button onClick = {()=>this.addingPost(true)}>Add A New Post</button>
            </div>
          );
        }
    }
}