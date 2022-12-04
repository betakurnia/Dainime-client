import React, { Component } from 'react';
import AllAnimeList from './AllAnimeList';
import RecentRelease from '../../Common/RecentRelease';
import AnimePlaceHolder from '../../Common/AnimePlaceHolder';
import RecentReleasePlaceHolder from '../../Common/RecentReleasePlaceHolder';
import { connect } from 'react-redux';
import { getAnimeList, getAnimeListSort } from '../../../actions/animeActions';
import { getAnimeListPageCount } from '../../../actions/helperActions';
import PropTypes from 'prop-types';

class AllAnimeLists extends Component {
  componentDidMount() {
    this.props.getAnimeList(0, true);

    this.props.getAnimeListPageCount();
  }

  render() {
    const { animeList } = this.props.anime;

    const { pageCount } = this.props.helper;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {loadingAnime ? (
                <AnimePlaceHolder />
              ) : (
                <AllAnimeList animeList={animeList} pageCount={pageCount} />
              )}
            </div>
            <div className="col-12 col-lg-4 d-none d-lg-block">
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

AllAnimeLists.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getAnimeList: PropTypes.func.isRequired,
  getAnimeListSort: PropTypes.func.isRequired,
  getAnimeListPageCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
  helper: state.helper,
});

export default connect(mapStateToProps, {
  getAnimeList,
  getAnimeListSort,
  getAnimeListPageCount,
})(AllAnimeLists);
