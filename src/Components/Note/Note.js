import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Note = ({input, setInput, handleChange}) => {
  // const [notes, setNotes] = useState([]);
  // const [input, setInput] = useState("");
  // let notes= props.notes;

  // function handleChange(e) {
  //   // setInput(e.target.value);

  //   notes.push(input)
  //   console.log(notes)
  // }
  return (
    <div className="bg-white w-96 h-60 rounded-md p-4 relative">
        <div>
          <textarea
            placeholder="Your note here..."
            className="focus:outline-none text-xl font-medium mb-4"
            onChange={(e) => {setInput(e.target.value)}}
            value={input}
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
