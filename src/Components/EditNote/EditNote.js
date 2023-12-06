import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const EditNote = ({setNotes, notes,note}) => {
  const [updatedTitle, setUpdateTitle] = useState(note.title);
  const [updatedDescription, setUpdatedDescription] = useState(note.description);
  const [updatedNotes, setUpdatedNotes] = useState([]);

  function addUpdatedNote() {
    console.log(notes)
    setNotes(() => [
      ...notes,
      {
        id: Math.random() * 100,
        title: updatedTitle,
        description: updatedDescription,
      },
    ]);
    // setNotes(updatedNotes)
  }

  return (
    <div className="bg-white w-96 h-60 rounded-md p-4 relative">
        <div>
        <input
            placeholder="Updated Title"
            className="focus:outline-none text-xl font-semibold mb-2"
            onChange={(e) => {setUpdateTitle(e.target.value)}}
            value={updatedTitle}
          />
          <textarea
            placeholder="Updated Description"
            className="focus:outline-none text-md font-medium mb-4"
            onChange={(e) => {setUpdatedDescription(e.target.value)}}
            value={updatedDescription}
            rows={7}
            cols={40}
          />
        </div>
        {/* Footer */}
        <div class="grid grid-cols-2 absolute bottom-0 items-center  mb-2">
          <div>
            <button
            onClick={addUpdatedNote}
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-md px-3"
            >
              Update
            </button>
          </div>
        </div>
    </div>
  );
};

export default EditNote;
