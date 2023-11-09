import React, { useState } from 'react';
import Note from '../Note/Note';

const Notes = () => {
    const [input, setInput] = useState("");
    const [notes, setNotes] = useState([]);

    function handleChange() {
    
        notes.push(input)
        console.log(notes)
      }
    return (
        <div>
            <Note notes={notes} handleChange={handleChange} input={input} setInput={setInput}></Note>
        </div>
    );
};

export default Notes;