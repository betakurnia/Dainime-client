import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { findAnime } from "../../actions/animeActions";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: "",
      showSearch: false,
      findAnime: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.showFalse = this.showFalse.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handeClickInside = this.handeClickInside.bind(this);
  }

  changeHandler(e) {
    if (this.state.anime.trim() === "") {
      this.props.anime.findAnime = {};
    }
    this.setState({ anime: e.target.value }, () => {
      this.props.findAnime(this.state.anime);
    });
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  showFalse() {
    this.setState({ showSearch: false });
  }

  handeClickInside() {
    this.setState({ showSearch: true });
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.state.showSearch
    ) {
      this.setState({ showSearch: false });
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const findAnime = Array.from(this.props.anime.findAnime);

    const findAnimesMobile =
      this.state.showSearch &&
      this.state.anime.trim() !== "" &&
      findAnime.map((findAnime, index) => (
        <div
          className="utility_absolute2 utility_hover_white"
          style={{ bottom: `${-10 - 10 * index + 1 * (index - 1)}%` }}
        >
          <div className="utility_background_white p-1  search-box">
            <a
              href="/#"
              className=" utility_text-decoration_underline-black "
              onClick={this.showFalse}
            >
              {" "}
              <Link
                to={`/${findAnime.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}/`}
              >
                <p className="text-black ">{findAnime.title}</p>
              </Link>
            </a>
          </div>
        </div>
      ));

    const findAnimesDesktop =
      this.state.showSearch &&
      this.state.anime.trim() !== "" &&
      findAnime.map((findAnime, index) => (
        <div
          className="utility_absolute utility_hover_white"
          style={{ bottom: `${-30 - 60 * index + 5 * (index - 1)}%` }}
        >
          <div className="utility_background_white p-1  search-box">
            <a
              href="/#"
              className=" utility_text-decoration_underline-black "
              onClick={this.showFalse}
            >
              {" "}
              <Link
                to={`/${findAnime.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}/`}
              >
                <p className="text-black ">{findAnime.title}</p>
              </Link>
            </a>
          </div>
        </div>
      ));

    const mobile = (
      <div>
        <nav className="navbar navbar-expand-lg utility_background_dark-black navbar-dark">
          <div className="container-fluid">
            <Link to="/">
              <h4 className="utility_text_18px">
                <a href="/#" className="navbar-brand text-primary-blue">
                  <img
                    className="img-fluid mr-2 ml-2"
                    style={{ width: 16, height: 16 }}
                    src="/image/helper/logo.png"
                    alt="dainime"
                  />
                  Dainime
                </a>
              </h4>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" activeClassName="nav-link">
                    <a
                      href="/#"
                    >
                      Home
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/anime-list" activeClassName="nav-link">
                    <a
                      href="/#"
                     
                    >
                      Daftar Anime
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/new-season" activeClassName="nav-link">
                    <a
                      href="/#"
                    >
                      Season Baru
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/schedule" activeClassName="nav-link">
                    <a
                      href="/#"
                    >
                      Jadwal
                    </a>
                  </NavLink>
                </li>
              </ul>
              <div className="d-md-block d-lg-none mt-3"></div>
              <div ref={this.setWrapperRef}>
                <form>
                  {" "}
                  <div className="input-group  utility_relative">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text pink lighten-3"
                        id="basic-text1"
                      >
                        <i
                          className="fa fa-search text-white"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <input
                      onClick={this.handeClickInside}
                      onChange={this.changeHandler}
                      className="form-control my-0 py-1"
                      type="text"
                      placeholder="Search Anime"
                      aria-label="Search"
                    />
                  </div>
                  {findAnimesMobile}
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );

    const desktop = (
      <div>
        <nav className="navbar navbar-expand-md utility_background_dark-black navbar-dark">
          <div className="container-fluid">
            <Link to="/">
              <h4 className="utility_text_18px">
                <a href="/#" className="navbar-brand text-primary-blue">
                  <img
                    className="img-fluid mr-2 ml-2"
                    style={{ width: 16, height: 16 }}
                    src="/image/helper/logo.png"
                    alt="dainime"
                  />
                  Dainime
                </a>
              </h4>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mx-auto utility__navbar">
                <li className="nav-item">
                  <Link to="/">
                    <a
                      href="/#"
                      className={classNames("nav-link", {
                        active:
                          window.location.href === "http://localhost:3000/"
                      })}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/anime-list">
                    <a
                      href="/#"
                      className={classNames("nav-link", {
                        active:
                          window.location.href ===
                          "http://localhost:3000/anime-list"
                      })}
                    >
                      Daftar Anime
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/new-season">
                    <a
                      href="/#"
                      className={classNames("nav-link", {
                        active:
                          window.location.href ===
                          "http://localhost:3000/new-season"
                      })}
                    >
                      Season Baru
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/schedule">
                    <a
                      href="/#"
                      className={classNames("nav-link", {
                        active:
                          window.location.href ===
                          "http://localhost:3000/schedule"
                      })}
                    >
                      Jadwal
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="d-md-block d-lg-none mt-3"></div>
              <div className="utility__search-box">
                <div ref={this.setWrapperRef}>
                  <form>
                    {" "}
                    <div className="input-group  utility_relative">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text pink lighten-3"
                          id="basic-text1"
                        >
                          <i
                            className="fa fa-search text-white"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>

                      <input
                        onClick={this.handeClickInside}
                        onChange={this.changeHandler}
                        className="form-control my-0 py-1"
                        type="text"
                        placeholder="Search Anime"
                        aria-label="Search"
                      />
                    </div>
                    {findAnimesDesktop}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );

    return (
      <div>
        <BrowserView>{desktop}</BrowserView>
        <TabletView>{desktop}</TabletView>
        <MobileView>{mobile}</MobileView>
        <div className="utility_margin-top-64px"></div>
      </div>
    );
  }
}

Navbar.propTypes = {
  anime: PropTypes.object.isRequired,
  findAnime: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime
});

export default connect(mapStateToProps, { findAnime })(Navbar);
