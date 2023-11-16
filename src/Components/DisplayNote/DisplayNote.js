import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const DisplayNote = ({ notes, handleDelete}) => {
    return (
        <div className="bg-white w-96 h-60 rounded-md p-4 relative">
        <div>
          <h1 className='text-xl font-medium'>{notes.title}</h1>
         <p className='text-md font-medium'>{notes.description}</p>
        </div>
        {/* Footer */}
        <div class="grid grid-cols-2 absolute bottom-0 items-center mb-2">
          <div className="">
            <button onClick={()=> handleDelete(notes.id)}>
              <AiFillDelete></AiFillDelete>
            </button>
          </div>

        </div>
    </div>
    );
};

export default DisplayNote;