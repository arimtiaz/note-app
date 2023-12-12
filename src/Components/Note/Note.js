import { AiFillDelete } from "react-icons/ai";

const Note = ({
  handleImage,
  description,
  setDescription,
  addNote,
  setTitle,
  title,
  notes,
  handleClear,
  status,
  setStatus,
  handleStatus
}) => {
  return (
    <div className="bg-white w-96 h-60 rounded-md p-4 relative">
      <div>
        <input
          placeholder="Title"
          className="focus:outline-none text-xl font-semibold mb-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <select value={status} onChange={handleStatus}>
          <option value="notStarted">Not Started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <textarea
          placeholder="Description"
          className="focus:outline-none text-md font-medium mb-4"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          rows={3}
          cols={38}
        />
        <input onChange={handleImage} type="file" className="text-sm" />
      </div>
      {/* Footer */}
      <div class="grid grid-cols-2 absolute bottom-0 items-center space-x-reverse mb-2">
        <div className="">
          <button onClick={handleClear}>
            <p>Clear</p>
          </button>
        </div>
        <div>
          <button
            onClick={() => addNote()}
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
