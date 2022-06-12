import React from "react";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import {auth} from '../../firebase/firebase';

export default function Navbar(props) {

async function onLogoutClick() {
    await signOut(auth);
}

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                Home
              </Link>
            </li>
            {props.user ? (
              <li className="nav-item">
                <button className="btn btn-primary" onClick={onLogoutClick}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
