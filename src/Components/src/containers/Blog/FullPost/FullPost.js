import React, { Component } from 'react';
import axios from 'axios';
import cssClasses from './FullPost.module.css';

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullPost: null
        }
    } 

    componentDidMount() {
        console.log(this.props);
        if(this.props.match.params.postId) {
            //allow api call when no data initially or when we have fetched data then dont make that call again so that it doesnot go into infinite loop
            if(!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== this.props.match.params.postId)) {
                axios.get(`/posts/${this.props.match.params.postId}`)
                .then((response) => {
                    this.setState({fullPost: response.data})
                })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then((response) => {
                console.log(response);
            })
    }

    render () {
        let post = <p  style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading.......</p>;
        }
        if(this.state.fullPost) {
            post = (
                <div className={cssClasses.FullPost}>
                    <h1>{this.state.fullPost.title}</h1>
                    <p>{this.state.fullPost.body}</p>
                    <div className={cssClasses.Edit}>
                        <button className={cssClasses.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;