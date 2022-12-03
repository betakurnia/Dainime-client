import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAnime } from '../../actions/animeActions';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: '',
      showSearch: false,
      findAnime: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.showFalse = this.showFalse.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handeClickInside = this.handeClickInside.bind(this);
  }

  changeHandler(e) {
    if (this.state.anime.trim() === '') {
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
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-md utility_background_dark-black navbar-dark">
            <div className="container-fluid d-flex justify-space-between">
              <div>
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
              </div>
              <div
                className="collapse navbar-collapse"
                id="collapsibleNavbar"
                style={{ flexGrow: 0, marginRight: 200 }}
              >
                <ul className="navbar-nav utility__navbar">
                  <li className="nav-item">
                    <Link to="/">
                      <a
                        href="/#"
                        className={classNames('nav-link', {
                          active:
                            window.location.href === 'http://localhost:3000/',
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
                        className={classNames('nav-link', {
                          active:
                            window.location.href ===
                            'http://localhost:3000/anime-list',
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
                        className={classNames('nav-link', {
                          active:
                            window.location.href ===
                            'http://localhost:3000/new-season',
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
                        className={classNames('nav-link', {
                          active:
                            window.location.href ===
                            'http://localhost:3000/schedule',
                        })}
                      >
                        Jadwal
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  anime: PropTypes.object.isRequired,
  findAnime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
});

export default connect(mapStateToProps, { findAnime })(Navbar);
