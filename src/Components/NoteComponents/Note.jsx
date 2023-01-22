import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note ({ id, text, deleteNote }) {
    return (
        <div className="note">
            <div className="note_body">{text}</div>
            <div className="note_footer" style={{ justifyContent: "center" }}>
                <DeleteOutlineIcon 
                    className="note_delete"
                    aria-hidden="true"
                    onClick={() => deleteNote(id)}
                ></DeleteOutlineIcon>
            </div>
        </div>
    )
}

export default Note;