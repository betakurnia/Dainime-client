import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentRelease from '../../Common/RecentRelease';
import PropTypes from 'prop-types';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mb-4">
              <div className="card">
                <div className="utility_background_light-black text-white pagination-sm  ">
                  <div className="card-header ">
                    <div className="d-flex">
                      <h2 className="h5 mb-0">About Us</h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {' '}
                  <h3 className="mb-0 utility_text_18px text-light-black">
                    Dainime
                  </h3>
                  <p className="text-light-gray mt-3">
                    Dainime adalah website download anime subtitle
                    Indonesia,Kami selalu berusaha memberikan pelayanan terbaik
                    dengan update anime terbaru dan subtitle berkualitas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <RecentRelease />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  episodeAnime: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  episodeAnime: state.episodeAnime,
});

export default connect(mapStateToProps, null)(About);
