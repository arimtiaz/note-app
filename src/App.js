import logo from './logo.svg';
import './App.css';
import Note from './Components/Note/Note';

function App() {
  return (
    <div className="App p-5">
   {/* Header */}
   <div className='Header flex justify-between mb-12'>
      <div>
        <h1 className='text-2xl font-semibold text-white'>All Notes</h1>
      </div>
      <div>
        <button className='bg-white p-2 rounded-md font-semibold'>Add New</button>
      </div>
    </div>
    {/* Body */}
      <div>
        <Note></Note>
      </div>
    </div>
  );
}

export default App;
