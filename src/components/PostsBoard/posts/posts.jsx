import React from 'react';

const Posts = (props) => {
    return props.items.map(post => 
        <div key={post.id} className="posting">
            <p>{post.subject}</p>
        </div>
    )

}

export default Posts