import React from 'react';

const DraftPosts = (props) => {
    console.log(props, 'what is coming thrSDASD?SSus??')
    return props.props.draftPosts.map(draftPost => 
        <div key={draftPost.id} className="posting">
            <p>{draftPost.subject}</p>
        </div>
    )
}

export default DraftPosts