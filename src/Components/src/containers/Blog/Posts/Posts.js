import React from 'react';
import cssClasses from './Posts.module.css';
import axios from '../../../../../axios';
import Post from '../../../components/Post/Post';
import {Link} from 'react-router-dom';

import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            // selectedPostId: null,
            // error: false
        }
    }

    componentDidMount() {
        console.log('props:::',this.props);
        axios.get(`/posts`)
        .then(response => {
            const posts = response.data.slice(0,8);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts})
        })
        .catch((error) => {
            console.log(error);
            //this.setState({error: true})
        })
    }

    postSelectorHandlor = (postIndex) => {
        this.props.history.push(`/${postIndex}`);
       // this.setState({selectedPostId: postIndex})
    }

    render() {
        let post = <p style={{color: 'red',textAlign: 'center'}}>Something went wrong</p>;
        // if(!this.state.error) {
        //     post = this.state.posts.map(item =>  <Link to={`/${item.id}`} key={item.id}>
        //                     <Post
        //                         title={item.title} 
        //                         author={item.author} 
        //                         clicked={()=>this.postSelectorHandlor(item.id)}/>
        //              </Link>);           
        //          {/* 1st routing way to tell 1 should be rendered */}
        //     {/*  <Link to={`/posts/${item.id}`} key={item.id}> */}    
        // }
        if(!this.state.error) {
            post = this.state.posts.map(item =>   <Post key={item.id}
                                title={item.title} 
                                author={item.author} 
                                clicked={()=>this.postSelectorHandlor(item.id)}/>);           
                 {/* 1st routing way to tell 1 should be rendered */}
            {/*  <Link to={`/posts/${item.id}`} key={item.id}> */}    
        }
        return (
            <div>
                <section className={cssClasses.Posts}>
                    {post}
                </section>
                <Route path="/:id" exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;