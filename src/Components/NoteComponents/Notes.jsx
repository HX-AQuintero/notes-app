import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('notes'));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    if(notes.length !== 0){
        window.localStorage.setItem('notes', JSON.stringify(notes));
    } else {
        window.localStorage.removeItem('notes')
    }
  }, [notes]);

  return (
    <div className="notes">
      {notes && notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
