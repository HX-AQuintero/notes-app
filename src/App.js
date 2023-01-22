import React from 'react';
import '../src/Components/css/App.css';
import Header from "../src/Components/NoteComponents/Header.jsx";
import Notes from "../src/Components/NoteComponents/Notes.jsx";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
