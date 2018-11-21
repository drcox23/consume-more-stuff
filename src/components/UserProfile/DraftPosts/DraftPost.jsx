import React from 'react';
import './DraftPost.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const DraftPosts = (props) => {
    console.log("POST PROPS", props)
    return props.draftPosts.map(draftPost =>
        <div key={draftPost.id} className="draftPost">
            <p className="draftPost-subject">{draftPost.subject}</p>
            <Link to={`/edit/draftpost/${draftPost.id}`}>
                <button id="editDraftPostBtn" type="button">Edit Draft</button>
            </Link>
            {/* <Link to="/user/profile"> */}
                <button id="deleteDraftPostBtn" type="button" onClick={() => {props.deleteFromDraft(draftPost.id, props.user.id)}}>Delete Draft</button>
            {/* </Link> */}
        </div>
    )
}

export default DraftPosts