import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                 Sam
                </NavLink>
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
                  <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                    <li className="nav-item">
                      <NavLink exact to="/" activeClassName="menu_active" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/service" activeClassName="menu_active" className="nav-link">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" activeClassName="menu_active" className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact" activeClassName="menu_active" className="nav-link">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  {/* Your centered search bar can go here */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
