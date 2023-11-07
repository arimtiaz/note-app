import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Note = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  function handleChange(e) {
    setTitle(e.target.value);
    setDescription(e.target.value);
    notes.push(title,description)
    console.log(notes)
  }
  return (
    <div className="bg-white w-96 h-60 rounded-md p-4 relative">
        <div>
          <input
            placeholder="Title"
            className="focus:outline-none text-xl font-semibold mb-4"
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
          />
          <input
            placeholder="Lorem ipsum dolor sit amet"
            className="focus:outline-none"
            name="Description"
            onChange={(e) => {setDescription(e.target.value)}}
          />
        </div>
        {/* Footer */}
        <div class="grid grid-cols-2 absolute bottom-0 items-center space-x-reverse mb-2">
          <div className="">
            <button>
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
          <div>
            <button
            onClick={handleChange}
              type="submit"
              className="bg-black text-white p-2 rounded-md px-3"
            >
              Save
            </button>
          </div>
        </div>
    </div>
  );
};

export default Note;
