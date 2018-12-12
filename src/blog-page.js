import React from 'react';
import PostSection from './post-section'
import NewPostForm from './new-post-form'
import SearchBar from './searchbar'
import FilterCategory from './filter-category'

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          posts:[
            {title: 'Poison Study', content: 'Great read', category: 'Book'},
            {title: 'Handmaids Tale', content: 'Crazy show', category: 'Show'},
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
             <NewPostForm onSave ={post=>this.savePost(post)} onCancel={()=>this.addingPost(false)}/>
          );
        }
        else{
          return (
            <div className = "blog-page">
              <button onClick = {()=>this.addingPost(true)}>Add A New Post</button>
              <SearchBar onChange = {e => this.searching(e)} searchTerm = {this.state.searchTerm}/>
              <FilterCategory filterChange = {e => this.filterChange(e)}/>
              {/* if(this.state.adding){
                  <NewPostForm onSave ={post=>this.savePost(post)} onCancel={()=>this.addingPost(false)}/>
              } */}
              <PostSection posts={posts}/>
            </div>
          );
        }
    }
}

// QUESTION: ideally want it work the way I have in comment - how can I do this?