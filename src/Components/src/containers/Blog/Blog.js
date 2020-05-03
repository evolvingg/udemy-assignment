import React, { Component } from 'react';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch} from 'react-router-dom';


class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to = "/" exact>Home</NavLink></li>
                            <li><NavLink to ={{
                                    pathname: "/new-post",
                                    hash: "#submit",
                                    search: '?quick-search=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact  render={() => <h1>Home</h1>} />
                <Route path="/"  render={() => <h1>Home2</h1>} /> */}

                {/* 1st routing way to tell 1 should be rendered */}
                {/* <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/posts/:postId' exact component={FullPost} /> */}


                {/* other way of telling react-router to loadd only single component from list of routes is using switch (load 1st one which matches) */}
                
                <Route path='/' exact component={Posts} />
                <Switch>
                    <Route path='/new-post'  component={NewPost} />
                    <Route path='/:postId' exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;