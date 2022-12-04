import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-md utility_background_dark-black navbar-dark text-white"
          style={{ marginBottom: 64 }}
        >
          <div className="container-fluid d-flex justify-space-between">
            <div>
              <NavLink to="/">
                <h4 className="utility_text_18px d-none d-md-block">
                  <a href="/#" className="navbar-brand text-primary-blue">
                    <img
                      className="img-fluid mr-2 ml-2 text-white"
                      style={{ width: 16, height: 16 }}
                      src="/image/helper/logo.png"
                      alt="dainime"
                    />
                    Dainime
                  </a>
                </h4>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse flex-grow-0"
              id="collapsibleNavbar"
              style={{ marginRight: 200 }}
            >
              <ul className="navbar-nav utility__navbar">
                <li className="nav-item">
                  <NavLink exact to="/">
                    <a href="/#" className="nav-link">
                      Home
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/anime-list">
                    <a href="/#" className={classNames('nav-link')}>
                      Daftar Anime
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/new-season">
                    <a href="/#" className="nav-link">
                      Season Baru
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/schedule">
                    <a href="/#" className="nav-link">
                      Jadwal
                    </a>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div />
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
