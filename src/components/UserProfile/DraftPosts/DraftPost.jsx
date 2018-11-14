import React from 'react';

const DraftPost = (props) => {
    return props.items.map(draftPost => 
        <div key={draftPost.id} className="posting" onClick={() => props.getDraftPost(draftPost.id)}>
            <p>{draftPost.subject}</p>
        </div>
    )
}

export default DraftPost