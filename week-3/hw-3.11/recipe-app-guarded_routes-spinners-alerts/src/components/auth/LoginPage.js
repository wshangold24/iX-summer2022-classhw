import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";
import Alert from "../common/Alert";

export default function LoginPage() {

  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onFormSubmit(e) {
    //login the user
    e.preventDefault();
    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCred);
      navigate('/');
    } catch (err) {
      //deal with error
      // alert(err.message);
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card card-body my-5">
        <h1>Login</h1>
        <p>Login with your email and password</p>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="text-center">
            {/* <button className="btn btn-primary px-5">Login</button> */}
            <Button loading={loading} className="px-5 mx-auto">
              Login
            </Button>
          </div>
        </form>
        <div className="text-center">
        {error ? (
            <Alert show={error} onClose={() => setError("")} className="mt-4">
              {error}
            </Alert>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
