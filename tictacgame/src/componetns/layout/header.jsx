import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/comment">
                  Comment
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/test">
                  Form
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/mockup">
                  Mockup
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/mockup_2">
                  Mockup_2
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/state">
                  State
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/composition">
                  Composition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
