import React from 'react';
import './DraftComments.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const DraftComments = (props) => {
    return props.draftComments.map(draftComment =>
        <div key={draftComment.id} className="draftComment">
            <p className="draftComment-subject">{draftComment.body}</p>
            <Link to="/editForm">
                <button id="editDraftCommentBtn" type="button">Edit Draft</button>
            </Link>
            <Link to="/user/profile">
                <button id="deleteDraftCommentBtn" type="button">Delete Draft</button>
            </Link>
        </div>
    )
}

export default DraftComments