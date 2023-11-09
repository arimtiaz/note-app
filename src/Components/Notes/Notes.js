import React, { useState } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";

const Notes = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);

    notes.push(input);
    console.log(notes);

  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <Note
        notes={notes}
        handleChange={handleChange}
        input={input}
        setInput={setInput}
      ></Note>
      <DisplayNote notes={notes}></DisplayNote>
    </div>
  );
};

export default Notes;
