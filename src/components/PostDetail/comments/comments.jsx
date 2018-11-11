import React from 'react';

import './comments.css'

const Comments = (props) => {
    return props.comments.map(comment => 
        <div key={comment.id} className="posting">
            <p>{comment.body}</p>
        </div>
    )
}

export default Comments