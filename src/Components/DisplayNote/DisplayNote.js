import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const DisplayNote = ({notes}) => {
    return (
        <div className="bg-white w-96 h-60 rounded-md p-4 relative">
        <div>
         <p className='font-medium'>{notes}</p>
        </div>
        {/* Footer */}
        <div class="grid grid-cols-2 absolute bottom-0 items-center space-x-reverse mb-2">
          <div className="">
            <button>
              <AiFillDelete></AiFillDelete>
            </button>
          </div>

        </div>
    </div>
    );
};

export default DisplayNote;