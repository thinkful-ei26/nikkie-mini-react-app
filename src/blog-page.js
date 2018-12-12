import React from 'react';
import PostSection from './post-section'
import NewPostForm from './new-post-form'
import SearchBar from './searchbar'
import FilterCategory from './filter-category'

import './blog-page.css'

export default class BlogPage extends React.Component {
    constructor(props) {
      let timestamp=Date.now(); 
      timestamp=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp);

        super(props);

        this.state={
          posts:[
            {title: 'Handmaids Tale', 
            content: 'Crazy show', 
            category: 'Show', 
            comments: [{message:'LOL', time: timestamp},{message: "Right?!", time: timestamp}]},
          ],
          adding: false,
          searchTerm: '',
          filterCategory: '',
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

    searching(e){
      this.setState({
        searchTerm: e.target.value.toLowerCase(),
        // state shouldn't change, but what we pass to PostSection should
      })
    }

    filterChange(e){
      this.setState({
        filterCategory: e.target.value,
      })
    }

    handleNewComment(newcomment, index){
      //update a specific post's comments by pushing this
      const currentPost = this.state.posts[index];
      const updatedComments = [...currentPost.comments,newcomment];
      //build a new post object representing the one we want: 
      const newPost = Object.assign({}, currentPost, {comments:updatedComments});
      //could have also written newPost.comments = updatedComments

      //make a new array of posts which has this one without mutating orig array
      const newPostsArray = this.state.posts.map((post,i)=>i===index ? newPost : post)

      

      this.setState({
        posts: newPostsArray,
      })
    }

    handleDeletePost(postIndex){
      //create a new postsarray without this one, and then set the state to this new one:
      const newPostsArray = this.state.posts.filter((post,index)=>index!==postIndex);
      this.setState({
        posts: newPostsArray,
      })
    }

    render() {
      let posts=this.state.posts.filter(post=>post.title.toLowerCase().includes(this.state.searchTerm)||post.content.toLowerCase().includes(this.state.searchTerm));

      //check if there's a filter category
      if(this.state.filterCategory){
        console.log('THERE"S A FILTER');
        posts=this.state.posts.filter(post=> post.category===this.state.filterCategory);
      }

      let newform=null;
      if(this.state.adding){
        newform =<NewPostForm onSave ={post=>this.savePost(post)} onCancel={()=>this.addingPost(false)}/>
      }
      console.log('THE STATE IS NOW', this.state);
          return(
            <div className="blog-page">
              <div className="actions-header">
                <button onClick={()=>this.addingPost(true)}>Add A New Post</button>
                <SearchBar onChange={e => this.searching(e)} searchTerm={this.state.searchTerm}/>
                <FilterCategory filterChange={e => this.filterChange(e)}/>              
              </div>
              {newform}
              <PostSection
                handleDeletePost={(postIndex)=>this.handleDeletePost(postIndex)} 
                handleNewComment={(newcomment,index)=>this.handleNewComment(newcomment, index)} 
                posts={posts}
                />
            </div>
          );
       
    }
}

//How would I make actions-header it's own component?