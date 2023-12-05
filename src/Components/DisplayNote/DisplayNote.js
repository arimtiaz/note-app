import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const DisplayNote = ({ notes, handleDelete, handleEdit}) => {
    return (
        <div className="bg-white w-96 h-60 rounded-md p-4 relative">
        <div>
          <h1 className='text-xl font-medium'>{notes.title}</h1>
         <p className='text-md font-medium'>{notes.description}</p>
        </div>
        {/* Footer */}
        <div class="grid grid-cols-2 absolute bottom-0 items-center mb-2">
          <div className="grid grid-cols-2 bottom-0 items-center">
          <div>
          <button onClick={()=> handleDelete(notes.id)}>
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
          <div>
            <button onClick={() => handleEdit()} className='bg-gray-200 rounded-lg p-2 w-12'><p>Edit</p></button>
          </div>
          </div>

        </div>
    </div>
    );
};

export default DisplayNote;