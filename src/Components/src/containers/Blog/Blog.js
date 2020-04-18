import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import cssClasses from './Blog.module.css';
import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
            error: false
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            const posts = response.data.slice(8,12);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts})
        })
        .catch((error) => {
            this.setState({error: true})
        })
    }

    postSelectorHandlor = (postIndex) => {
        this.setState({selectedPostId: postIndex})
    }

    render () {
        let post = <p style={{color: 'red',textAlign: 'center'}}>Something went wrong</p>;
        if(!this.state.error) {
            post = this.state.posts.map(item => <Post key={item.id} 
                title={item.title} 
                author={item.author} 
                clicked={()=>this.postSelectorHandlor(item.id)}/>);
        }
        return (
            <div>
                <section className={cssClasses.Posts}>
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;