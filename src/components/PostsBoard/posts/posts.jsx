import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './posts.css';

const Posts = (props) => {
    console.log("Posts - props:", props);
    let match = props.match;
    if (match === '/') {
        match = '';
    } else {
        match = '/dashboard';
    }
    return props.items.map(post =>
        <Link key={post.id} to={`${match}/post/${post.id}`}>
            <div key={post.id} className="posting" onClick={() => props.getPostandCommentsById(post.id)}>
                <p className="single-posting-container">

                    <div className="userIcon">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />

                        <i className="far fa-user-circle fa-3x"></i>
                    </div>

                    <div className="postSubject-container">
                        <p className="postSubject">{post.subject}</p>
                    </div>

                    <div className="viewPosting">view posting</div>

                </p>
            </div>
        </Link>
    )
}

export default Posts