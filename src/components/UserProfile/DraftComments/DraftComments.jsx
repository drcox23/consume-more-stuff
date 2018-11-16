import React from 'react';

const DraftComments = (props) => {
    return props.draftComments.map(draftComment => 
        <div key={draftComment.id} className="posting">
            <p>{draftComment.body}</p>
        </div>
    )
}

export default DraftComments