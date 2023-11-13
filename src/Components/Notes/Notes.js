import React, { useState } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";

const Notes = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote() {
    setNotes(...notes,[input])
    setInput("")
    // console.log(notes);
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <Note
        notes={notes}
        handleChange={addNote}
        input={input}
        setInput={setInput}
      ></Note>
      {notes.map((note) => {
         return <DisplayNote notes={note}></DisplayNote>
      })}
    </div>
  );
};

export default Notes;
