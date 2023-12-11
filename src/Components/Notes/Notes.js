import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";
import EditNote from "../EditNote/EditNote";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(null);
  const [time, setTime] = useState(0);
  function getTime(){
    const showDate = new Date();
    const showTime =
      showDate.getHours() +
      ":" +
      showDate.getMinutes();
    setTime(showTime);
  }
  

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
    getTime()
  }
  console.log(time)
  
  function handleClear() {
    setTitle("");
    setDescription("");
  }

  function handleDelete(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  function handleEdit(id) {
    setEditing(id);
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
      {notes.map((note) =>
        editing === note.id ? (
          <EditNote
            key={note.id}
            setNotes={setNotes}
            notes={notes}
            note={note}
          ></EditNote>
        ) : (
          <DisplayNote
          time={time}
            handleEdit={handleEdit}
            key={note.id}
            note={note}
            handleDelete={handleDelete}
          ></DisplayNote>
        )
      )}
    </div>
  );
};

export default Notes;
