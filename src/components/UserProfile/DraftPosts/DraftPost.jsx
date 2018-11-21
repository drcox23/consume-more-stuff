import React from 'react';
import './DraftPost.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const DraftPosts = (props) => {
    console.log("POST PROPS", props)
    return props.draftPosts.map(draftPost =>
        <div key={draftPost.id} className="draftPost">
            {/* <div className="pencil-icon"><i class="fas fa-pencil-alt"></i></div> */}

            <p className="draftPost-subject">{draftPost.subject}</p>
            <br />
            <Link to={`/edit/draftpost/${draftPost.id}`}>
                <button className="editDraftPostBtn" type="button">Edit Draft</button>
            </Link>
            {/* <Link to="/user/profile"> */}
            <button className="deleteDraftPostBtn" type="button" onClick={() => { props.deleteFromDraft(draftPost.id, props.user.id) }}>Delete Draft</button>
            {/* </Link> */}
        </div>
    )
}

export default DraftPosts