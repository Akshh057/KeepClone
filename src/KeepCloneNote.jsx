import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function KeepCloneNote(props) {
    return (
        <div className="notes">
            <h1 className="output_field">{props.title}</h1>
            <p className="output_field">{props.content}</p>
            <button className="btn" onClick={() => {
                props.onSelect(props.id);
            }}>
                <DeleteIcon className="delete_icon" />
            </button>
        </div>
    )
}

export default KeepCloneNote
