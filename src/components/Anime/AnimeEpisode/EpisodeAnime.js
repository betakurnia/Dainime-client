import React, { Component } from "react";
import HeaderAnime from "./HeaderAnime";
import RecentEpisode from "./RecentEpisode";
import RecentEpisodeMobile from "./RecentEpisodeMobile";
import DownloadLink from "./DownloadLink";
import RecentRelease from "../../Common/RecentRelease";
import RecentReleasePlaceHolder from "../../Common/RecentReleasePlaceHolder";
import EpisodeAnimePlaceHolder from "../../Common/EpisodeAnimePlaceHolder";
import Spinner from "../../Common/Spinner";
import { connect } from "react-redux";
import { getEpisode } from "../../../actions/episodeAnimeActions";
import PropTypes from "prop-types";
import Disqus from "disqus-react";

class EpisodeAnime extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.match.params.episode !== prevProps.match.params.episode) {
      this.props.getEpisode(
        this.props.match.params.title,
        this.props.match.params.episode
      );
    }
  }

  componentDidMount() {
    this.props.getEpisode(
      this.props.match.params.title,
      this.props.match.params.episode
    );
  }

  render() {


    const { episode } = this.props.episodeAnime;

    const loading = this.props.anime.loading;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    const disqusShortname = "dainimes";
    const disqusConfig = {
      url: `http://localhost:3000/${this.props.match.params.title}/episode-${this.props.match.params.episode}`, //this.props.pageUrl
      identifier: `${this.props.match.params.title}/episode-${this.props.match.params.episode}`, //this.props.uniqueId
      title: `${this.props.match.params.title}` //this.props.title
    };

    return (
      <div>
        <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              {loadingAnime ? (
                <EpisodeAnimePlaceHolder />
              ) : (
                <React.Fragment>
                  <HeaderAnime episode={episode} />
                  <div className="mt-5"></div>
                  <RecentEpisode
                    column="col-lg-2"
                    title={this.props.match.params.title}
                  />
                  <div className="mt-5"></div>
                  <DownloadLink
                    episode={episode}
                    column="col-lg-12 "
                    clickNupload="ClickNUpload"
                  />
                  <div className="mt-5"></div>
                  <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                  />
                </React.Fragment>
              )}
            </div>
            <div className="col-lg-4">
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
  getEpisode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime
});

export default connect(mapStateToProps, { getEpisode })(EpisodeAnime);
