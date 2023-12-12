import { useState } from "react";

const EditNote = ({setNotes, notes, note }) => {
  const [updatedTitle, setUpdateTitle] = useState(note.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    note.description
  );
  const [updatedImage, setUpdatedImage] = useState(note.image)

  function handleUpdatedImage(e){
    setUpdatedImage(URL.createObjectURL(e.target.files[0]));
  }

  function updateNote() {
    const updatedNotes = notes.map((n) =>
      n.id === note.id
        ? {
            ...notes,
            title: updatedTitle,
            description: updatedDescription,
            time: new Date().toLocaleTimeString(),
            image: updatedImage,
          }
        : n
    );
    setNotes(updatedNotes);
  }

  return (
    <div className="bg-white w-96 h-60 rounded-md p-4 relative">
      <div>
        <input
          placeholder="Updated Title"
          className="focus:outline-none text-xl font-semibold mb-2"
          onChange={(e) => {
            setUpdateTitle(e.target.value);
          }}
          value={updatedTitle}
        />
        <textarea
          placeholder="Updated Description"
          className="focus:outline-none text-md font-medium mb-4"
          onChange={(e) => {
            setUpdatedDescription(e.target.value);
          }}
          value={updatedDescription}
          rows={3}
          cols={37}
        />
        <input type="file" className="text-sm" onChange={handleUpdatedImage}/>
      </div>
      {/* Footer */}
      <div class="grid grid-cols-2 absolute bottom-0 items-center  mb-2">
        <div>
          <button
            onClick={updateNote}
            type="submit"
            className="bg-orange-500 text-white p-2 rounded-md px-3"
          >
            Update
          </button>
        </div>
        <div className=" bottom-0 right-0 p-4 text-gray-600">
          <h1>Updated on {note.time}</h1>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
