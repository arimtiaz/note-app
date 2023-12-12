import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const DisplayNote = ({image, time, setTime, note, handleDelete, handleEdit }) => {
  // console.log(time)
  return (
    <div className="bg-white w-96 h-60 rounded-md p-4 relative">
      <div>
       <div className="grid grid-cols-2 items-center">
       <h1 className="row-end text-xl font-medium">{note.title}</h1>
        <p className=" text-sm text-blue-600">Status: {note.status}</p>
       </div>
        <p className="text-md font-medium">{note.description}</p>
        <img src={note.image} className=" w-36 h-28" alt="" />
      </div>
      {/* Footer */}
      <div class="grid grid-cols-2 absolute bottom-0 items-center mb-2">
        <div className="grid grid-cols-2 bottom-0 items-center">
          <div>
            <button onClick={() => handleDelete(note.id)}>
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
          <div>
            <button
              onClick={() => handleEdit(note.id, note)}
              className="bg-gray-200 rounded-lg p-2 w-12"
            >
              <p>Edit</p>
            </button>
            <div></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-4 text-gray-600">
      <h1>Created on {note.time}</h1>
      </div>
    </div>
  );
};

export default DisplayNote;
