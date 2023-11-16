import React, { useState } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";

const Notes = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([
    { id: Math.random() * 100, title: "title", description: "description" },
  ]);

  function addNote() {
    setNotes(...notes, {
      id: Math.random() * 10,
      title: title,
      description: description,
    });
    setDescription("");
    setTitle("");
    console.log(notes);
  }
  function handleDelete(id) {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    console.log("Deleting", notes);
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <Note
        notes={notes}
        addNote={addNote}
        description={description}
        setDescription={setDescription}
        title={title}
        setTitle={setTitle}
      ></Note>
      {notes.map((note) => (
        <DisplayNote key={note.id} notes={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Notes;
