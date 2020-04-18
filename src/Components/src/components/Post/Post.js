import React from 'react';

import cssClasses from './Post.module.css';

const post = (props) => (
    <article className={cssClasses.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className={cssClasses.Info}>
            <div className={cssClasses.Author}>{props.author}</div>
        </div>
    </article>
);

export default post;