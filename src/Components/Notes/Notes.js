import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";
import EditNote from "../EditNote/EditNote";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(null);
  const [image, setImage] = useState();
  

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

  function handleImage(e){
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function addNote() {
    setNotes(() => [
      ...notes,
      {
        id: Math.random() * 100,
        title: title,
        description: description,
        image: image,
        time: new Date().toLocaleTimeString(),
      },
    ]);
    //clear the textarea
    setTitle("");
    setDescription("");
    setImage()
  }
  
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
        handleImage = {handleImage}
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
            handleEdit={handleEdit}
            key={note.id}
            note={note}
            handleDelete={handleDelete}
            image={image}
          ></DisplayNote>
        )
      )}
    </div>
  );
};

export default Notes;
