import React, { Component } from 'react';
import HomeAnime from './HomeAnime';
import OngoingAnime from './OngoingAnime';
import AnimePlaceHolder from '../../Common/AnimePlaceHolder';
import OngoingPlaceHolder from '../../Common/OngoingPlaceHolder';
import { connect } from 'react-redux';
import { getLastRelease } from '../../../actions/episodeAnimeActions';
import { getOngoingAnime } from '../../../actions/animeActions';
import { getLastReleasePageCount } from '../../../actions/helperActions';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount() {
    this.props.getLastRelease(0, true);

    this.props.getOngoingAnime();

    this.props.getLastReleasePageCount();
  }

  render() {
    const { lastRelease } = this.props.episodeAnime;

    const { ongoingAnime } = this.props.anime;

    const { pageCount } = this.props.helper;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.episodeAnime.loading;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            {loadingEpisodeAnime ? (
              <AnimePlaceHolder />
            ) : (
              <HomeAnime lastRelease={lastRelease} pageCount={pageCount} />
            )}
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            {loadingAnime ? (
              <OngoingPlaceHolder />
            ) : (
              <OngoingAnime ongoingAnime={ongoingAnime} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getLastRelease: PropTypes.func.isRequired,
  getOngoingAnime: PropTypes.func.isRequired,
  getLastReleasePageCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  episodeAnime: state.episodeAnime,
  anime: state.anime,
  helper: state.helper,
});

export default connect(mapStateToProps, {
  getLastRelease,
  getOngoingAnime,
  getLastReleasePageCount,
})(Home);
