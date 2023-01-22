import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

function Note ({ id, text, deleteNote }) {
    return (
        <div className="note">
            <div className="note_body">{text}</div>
            <div className="note_footer" style={{ justifyContent: "space-evenly" }}>
                <Checkbox className="note_check"/>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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