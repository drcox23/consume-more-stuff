import React from 'react';

const Posts = (props) => {
    console.log("Posts - props:", props);
    return props.items.map(post =>
        <div key={post.id} className="posting" onClick={() => props.getPostById(post.id)}>
            <p className="single-posting-container">

                <div className="userIcon">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />

                    <i class="far fa-user-circle fa-3x"></i>
                </div>

                <div className="postSubject-container">
                    <p className="postSubject">{post.subject}</p>
                </div>

                <div className="viewPosting">view posting</div>

            </p>
        </div>
    )
}

export default Posts