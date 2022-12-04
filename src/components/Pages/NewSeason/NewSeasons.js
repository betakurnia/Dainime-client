import React, { Component } from 'react';
import NewSeason from './NewSeason';
import RecentRelease from '../../Common/RecentRelease';
import AnimePlaceHolder from '../../Common/AnimePlaceHolder';
import RecentReleasePlaceHolder from '../../Common/RecentReleasePlaceHolder';
import { connect } from 'react-redux';
import { getNewSeason } from '../../../actions/animeActions';
import { getNewSeasonCount } from '../../../actions/helperActions';
import PropTypes from 'prop-types';

class NewSeasons extends Component {
  componentDidMount() {
    this.props.getNewSeason(0, true);

    this.props.getNewSeasonCount();
  }

  render() {
    const { newSeason } = this.props.anime;

    const { pageCount } = this.props.helper;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {loadingAnime ? (
                <AnimePlaceHolder />
              ) : (
                <NewSeason newSeason={newSeason} pageCount={pageCount} />
              )}
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              {loadingEpisodeAnime ? (
                <RecentReleasePlaceHolder />
              ) : (
                <RecentRelease />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewSeasons.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getNewSeason: PropTypes.func.isRequired,
  getNewSeasonCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
  helper: state.helper,
});

export default connect(mapStateToProps, { getNewSeason, getNewSeasonCount })(
  NewSeasons,
);
