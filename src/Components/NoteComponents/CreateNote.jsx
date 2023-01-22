import React from "react";
import { LinearProgress } from '@mui/material';

function CreateNote ({ textHandler, saveHandler, inputText }) {

    const charLimit = 100;
    const charLeft = charLimit - inputText.length;

    return (
        <div className="note">
            <textarea 
                cols='10'
                rows='5'
                placeholder='Type something...'
                maxLength='100'
                value={inputText}
                onChange={textHandler}
            />
            <div className="note_footer">
                <span className="label">{charLeft} left</span>
                <button className="note_save" onClick={saveHandler}>Save</button>
            </div>
            <LinearProgress 
                className="car_progress"
                variant="determinate"
                value={charLeft}
            />
        </div>
    )
}

export default CreateNote;