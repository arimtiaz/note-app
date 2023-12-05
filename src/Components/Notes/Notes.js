import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";
import EditNote from "../EditNote/EditNote";

const Notes = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("Notes");
    console.log("Getting data from Notes", data);
    if (data) {
      setNotes(JSON.parse(data));
    } else {
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
    console.log("Saving data from Notes", notes);
  }, [notes]);

  function addNote() {
    setNotes(() => [
      ...notes,
      {
        id: Math.random() * 100,
        title: title,
        description: description,
      },
    ]);
    //clear the textarea
    setTitle("");
    setDescription("");
  }

  function handleClear() {
    setTitle("");
    setDescription("");
  }

  function handleDelete(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    // console.log("Deleting", notes);
  }

  function handleEdit() {
    setEditing(true);
    // console.log(setEditing)
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
      <Note
        handleClear={handleClear}
        notes={notes}
        addNote={addNote}
        description={description}
        setDescription={setDescription}
        title={title}
        setTitle={setTitle}
      ></Note>
      {notes.map((note) => (
        setEditing ?(<DisplayNote key={note.id} handleEdit={handleEdit} notes={note} handleDelete={handleDelete} ></DisplayNote>) : (<EditNote></EditNote>) 
      ))}
    </div>
  );
};

export default Notes;
