import React, { Component } from 'react';
import HeaderAnime from './HeaderAnime';
import DownloadLink from './DownloadLink';
import RecentRelease from '../../Common/RecentRelease';
import RecentReleasePlaceHolder from '../../Common/RecentReleasePlaceHolder';
import EpisodeAnimePlaceHolder from '../../Common/EpisodeAnimePlaceHolder';
import { connect } from 'react-redux';
import { getEpisode } from '../../../actions/episodeAnimeActions';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';

class EpisodeAnime extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.episode !== prevProps.match.params.episode) {
      this.props.getEpisode(
        this.props.match.params.title,
        this.props.match.params.episode,
      );
    }
  }

  componentDidMount() {
    this.props.getEpisode(
      this.props.match.params.title,
      this.props.match.params.episode,
    );
  }

  render() {
    const { episode } = this.props.episodeAnime;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    const disqusShortname = 'dainimes';
    const disqusConfig = {
      url: `${process.env.REACT_DISQUSS_URL}/${this.props.match.params.title}/episode-${this.props.match.params.episode}`, //this.props.pageUrl
      identifier: `${this.props.match.params.title}/episode-${this.props.match.params.episode}`, //this.props.uniqueId
      title: `${this.props.match.params.title}`, //this.props.title
    };

    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                {loadingAnime ? (
                  <EpisodeAnimePlaceHolder />
                ) : (
                  <>
                    <HeaderAnime episode={episode} />
                    <DownloadLink
                      episode={episode}
                      clickNupload="ClickNUpload"
                    />
                    <Disqus.DiscussionEmbed
                      shortname={disqusShortname}
                      config={disqusConfig}
                    />
                  </>
                )}
              </div>
              <div className="col-12 col-lg-4">
                {loadingEpisodeAnime ? (
                  <RecentReleasePlaceHolder />
                ) : (
                  <RecentRelease />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EpisodeAnime.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  getEpisode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
});

export default connect(mapStateToProps, { getEpisode })(EpisodeAnime);
