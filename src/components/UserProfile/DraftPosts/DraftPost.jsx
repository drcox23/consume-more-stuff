import React from 'react';

const DraftPosts = (props) => {
    return props.draftPosts.map(draftPost => 
        <div key={draftPost.id} className="posting">
            <p>{draftPost.subject}</p>
        </div>
    )
}

export default DraftPosts