import logo from "./logo.svg";
import "./App.css";
import Notes from "./Components/Notes/Notes";
import app from "./firebase.init";
import SignUpForm from "./Components/SignForm/SignUpForm";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./Components/SignForm/SignInForm";

function App() {
  return (
    <div className="App p-5">
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/" element={<SignUpForm />} />
        <Route path="/notes" element={<Notes></Notes>} />
      </Routes>

      {/* Body */}
      <div>
        {/* <SignUpForm></SignUpForm> */}
        {/* <Notes></Notes> */}
      </div>
    </div>
  );
}

export default App;
