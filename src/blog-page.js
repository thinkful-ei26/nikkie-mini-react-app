import React from 'react';
import PostSection from './post-section'
import NewPostForm from './new-post-form'
import SearchBar from './searchbar'
import FilterCategory from './filter-category'

import './blog-page.css'

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          posts:[
            {title: 'Poison Study', content: 'Great read', category: 'Book', comments: ['LOL', 'HAHAHAHA']},
            {title: 'Handmaids Tale', content: 'Crazy show', category: 'Show', comments: ['Agreed!']},
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

    render() {
      let posts = this.state.posts.filter(post=>post.title.toLowerCase().includes(this.state.searchTerm)||post.content.toLowerCase().includes(this.state.searchTerm));

      //check if there's a filter category
      if(this.state.filterCategory){
        console.log('THERE"S A FILTER');
        posts = this.state.posts.filter(post=> post.category===this.state.filterCategory);
      }

      console.log('THE STATE IS NOW', this.state);
        if(this.state.adding){
          return(
            <div className = "blog-page">
              <div className = "actions-header">
                <button onClick = {()=>this.addingPost(true)}>Add A New Post</button>
                <SearchBar onChange = {e => this.searching(e)} searchTerm = {this.state.searchTerm}/>
                <FilterCategory filterChange = {e => this.filterChange(e)}/>              
              </div>
              <NewPostForm onSave ={post=>this.savePost(post)} onCancel={()=>this.addingPost(false)}/>
              <PostSection posts={posts}/>
            </div>
          );
        }
        else{
          return (
            <div className = "blog-page">
              <div className = "actions-header">
                <button onClick = {()=>this.addingPost(true)}>Add A New Post</button>
                <SearchBar onChange = {e => this.searching(e)} searchTerm = {this.state.searchTerm}/>
                <FilterCategory filterChange = {e => this.filterChange(e)}/>              
              </div>
              <PostSection posts={posts}/>
            </div>
          );
        }
    }
}

// QUESTION: I'm repeating code but I don't know how to fix it.
//How would I make actions-header it's own component?