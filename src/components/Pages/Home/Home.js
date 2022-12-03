import React, { Component } from "react";
import HomeAnime from "./HomeAnime";
import OngoingAnime from "./OngoingAnime";
import AnimePlaceHolder from "../../Common/AnimePlaceHolder";
import OngoingPlaceHolder from "../../Common/OngoingPlaceHolder";

import { connect } from "react-redux";
import { getLastRelease } from "../../../actions/episodeAnimeActions";
import { getOngoingAnime } from "../../../actions/animeActions";
import { getLastReleasePageCount } from "../../../actions/helperActions";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    document.title = "Dainime | Download anime subtitle Indonesia";

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
      <div>
        <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  {loadingEpisodeAnime ? (
                    <AnimePlaceHolder />
                  ) : (
                    <HomeAnime
                      column="col-lg-3"
                      divided="3"
                      height="utility_height_40px"
                      lastRelease={lastRelease}
                      pageCount={pageCount}
                    />
                  )}
                </div>
                <div className="col-lg-4">
                  {loadingAnime ? (
                    <OngoingPlaceHolder />
                  ) : (
                    <OngoingAnime ongoingAnime={ongoingAnime} />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-lg-8"></div>
                </div>
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
  getLastReleasePageCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  episodeAnime: state.episodeAnime,
  anime: state.anime,
  helper: state.helper
});

export default connect(mapStateToProps, {
  getLastRelease,
  getOngoingAnime,
  getLastReleasePageCount
})(Home);
