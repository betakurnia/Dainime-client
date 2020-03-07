import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Component
import RecentRelease from "../../Common/RecentRelease";
import Spinner from "../../Common/Spinner";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { loading } = this.props.episodeAnime;

    const mobile = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="utility_background_light-black text-white pagination-sm  ">
                <div className="card-header ">
                  <div className="d-flex">
                    <h5>Contact Us</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {" "}
                <div className="row">
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src="/image/helper/facebook.png"
                      alt="facebook"
                    />
                    <h4>facebook</h4>
                    <a
                      href="https://www.facebook.com/Dainime-107039214162563/"
                      className="utility_text-decoration_underline text-light-black"
                    >
                      <h4 className="utility_text_18px ">dainime</h4>
                    </a>
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src="/image/helper/instagram.png"
                      alt="instagram"
                    />
                    <h4>instagram</h4>
                    <a
                      href="https://www.instagram.com/dainimed/"
                      className="utility_text-decoration_underline text-light-black"
                    >
                      <h4 className="utility_text_18px ">dainimed</h4>
                    </a>
                  </div>
                </div>
                <div className="mt-3"></div>
                <div className="row">
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src="/image/helper/email.png"
                      alt="email"
                    />
                    <h4>email</h4>
                  </div>
                  <div className="col-8">
                    <h4 className="utility_text_18px ">dainimed@gmail.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const tablet = (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="utility_background_light-black text-white pagination-sm  ">
                <div className="card-header ">
                  <div className="d-flex">
                    <h5>Contact Us</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {" "}
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid"
                          src="/image/helper/facebook.png"
                          alt="facebook"
                        />
                      </div>
                    </div>
                    <h4>facebook</h4>
                    <a
                      href="https://www.facebook.com/Dainime-107039214162563/"
                      className="utility_text-decoration_underline text-light-black"
                    >
                      <h4 className="utility_text_18px ">dainime</h4>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid"
                          src="/image/helper/instagram.png"
                          alt="instagram"
                        />
                      </div>
                    </div>
                    <h4>instagram</h4>
                    <a
                      href="https://www.instagram.com/dainimed/"
                      className="utility_text-decoration_underline text-light-black"
                    >
                      <h4 className="utility_text_18px ">dainimed</h4>
                    </a>
                  </div>
                </div>
                <div className="mt-3"></div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid"
                          src="/image/helper/email.png"
                          alt="email"
                        />
                      </div>
                    </div>
                    <h4>email</h4>
                    <h4 className="utility_text_18px ">dainimed@gmail.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const desktop = (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="utility_background_light-black text-white pagination-sm  ">
                <div className="card-header ">
                  <div className="d-flex">
                    <h5>Contact Us</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {" "}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          className="img-fluid"
                          src="/image/helper/facebook.png"
                          alt="facebook"
                        />
                      </div>
                    </div>
                    <h4>facebook</h4>
                    <a
                      href="https://www.facebook.com/Dainime-107039214162563/"
                      className="utility_text-decoration_underline text-light-black"
                    >
                      <h4 className="utility_text_18px ">dainime</h4>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          className="img-fluid"
                          src="/image/helper/instagram.png"
                          alt="instagram"
                        />
                      </div>
                    </div>
                    <h4>instagram</h4>
                    <a
                      href="https://www.instagram.com/dainimed/"
                      className="utility_text-decoration_underline text-light-black"
                    >
                      <h4 className="utility_text_18px ">dainimed</h4>
                    </a>
                  </div>
                </div>
                <div className="mt-3"></div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          className="img-fluid"
                          src="/image/helper/email.png"
                          alt="email"
                        />
                      </div>
                    </div>
                    <h4>email</h4>
                    <h4 className="utility_text_18px ">dainimed@gmail.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <RecentRelease />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <BrowserView>{loading ? <Spinner /> : desktop}</BrowserView>
        <TabletView>{tablet}</TabletView>
        <MobileView>{mobile}</MobileView>
      </div>
    );
  }
}

Contact.propTypes = {
  episodeAnime: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  episodeAnime: state.episodeAnime
});

export default connect(mapStateToProps, null)(Contact);
