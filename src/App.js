import logo from './logo.svg';
import './App.css';
import Note from './Components/Note/Note';
import Notes from './Components/Notes/Notes';

function App() {
  return (
    <div className="App p-5">
   {/* Header */}
   <div className='Header flex justify-between mb-12 items-center'>
      <div>
        <h1 className='text-2xl font-bold text-white'>All Notes</h1>
      </div>
      <div>
        <button className='bg-white p-2 rounded-md font-semibold'>Add New</button>
      </div>
    </div>
    {/* Body */}
      <div>
        <Notes></Notes>
      </div>
    </div>
  );
}

export default App;
