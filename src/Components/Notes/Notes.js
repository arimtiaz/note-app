import React, { useEffect, useState, } from "react";
import Note from "../Note/Note";
import DisplayNote from "../DisplayNote/DisplayNote";
import EditNote from "../EditNote/EditNote";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(null);
  const [image, setImage] = useState();
  const [status, setStatus] = useState("All");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState();
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  
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

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function handleStatus(e) {
    const status = setStatus(e.target.value);
    console.log(status);
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
        status: status,
      },
    ]);
    //clear the textarea
    setTitle("");
    setDescription("");
    setImage();
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

  function filterStatus(e) {
    const selectedStatus = e.target.value;
    setSelectedStatus(selectedStatus);

    if (selectedStatus === "all") {
      setFilteredNotes(notes);
    } else {
      const filteredNotes = notes.filter(
        (note) => note.status === selectedStatus
      );
      setFilteredNotes(filteredNotes);
    }
  }

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
        // console.log("Sign Out Successful");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div>
      {/* Header */}
      <div className="Header flex justify-between mb-12 items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">All Notes Of {user.email}</h1>
        </div>
        <div>
          <button
            onClick={handleSignOut}
            className="btn bg-white p-2 rounded-lg font-semibold"
          >
            Sign Out
          </button>
        </div>
      </div>
      {/* Filter */}
      <div>
        <select
          onChange={filterStatus}
          className="bg-black p-3 text-white rounded-xl mb-10"
        >
          <option value="All">All</option>
          <option value="Not-Started">Not Started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
      </div>
      {/* Note */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <Note
          handleClear={handleClear}
          notes={notes}
          addNote={addNote}
          description={description}
          setDescription={setDescription}
          title={title}
          setTitle={setTitle}
          handleImage={handleImage}
          status={status}
          setStatus={setStatus}
          handleStatus={handleStatus}
        ></Note>
        {filteredNotes.map((note) =>
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
              status={status}
            ></DisplayNote>
          )
        )}
      </div>
    </div>
  );
};

export default Notes;
