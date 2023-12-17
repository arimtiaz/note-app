import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/notes')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  return (
    <form
      className="w-1/4 mx-auto bg-gray-50 p-10 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-5">Log In</h2>
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        onChange={handleEmail}
        placeholder="Email"
      />

      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        onChange={handlePassword}
        placeholder="Password"
      />

      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
      >
       Log In
      </button>
      <p className="text-sm text-red-500 py-2">{error}</p>
      <Link to='/'><p className="text-center font-semibold">Create Account</p></Link>
    </form>
  );
};

export default SignInForm;
