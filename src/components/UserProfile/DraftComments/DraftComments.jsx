import React from 'react';

const DraftComments = (props) => {
    return props.items.map(draftComment => 
        <div key={draftComment.id} className="posting" onClick={() => props.getDraftComment(draftComment.id)}>
            <p>{draftComment.body}</p>
        </div>
    )
}

export default DraftComments