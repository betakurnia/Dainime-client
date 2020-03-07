import React, { Component } from "react";

// Component
import HomeAnime from "./HomeAnime";
import OngoingAnime from "./OngoingAnime";
import AnimePlaceHolder from "../../Common/AnimePlaceHolder";
import OngoingPlaceHolder from "../../Common/OngoingPlaceHolder";
import Spinner from "../../Common/Spinner";

// Redux
import { connect } from "react-redux";
import { getLastRelease } from "../../../actions/episodeAnimeActions";
import { getOngoingAnime } from "../../../actions/animeActions";
import { getLastReleasePageCount } from "../../../actions/helperActions";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
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

    const mobilePotrait = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <HomeAnime
                column="col-6"
                divided="1"
                height="utility_height_60px"
                lastRelease={lastRelease}
                pageCount={pageCount}
              />
            </div>
          </div>
        </div>
      </div>
    );

    const mobileLandscape = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <HomeAnime
                column="col-sm-4"
                divided="2"
                height="utility_height_60px"
                lastRelease={lastRelease}
                pageCount={pageCount}
              />
            </div>
          </div>
        </div>
      </div>
    );

    const tablet = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <HomeAnime
                column="col-md-3"
                divided="3"
                height="utility_height_40px"
                lastRelease={lastRelease}
                pageCount={pageCount}
              />
            </div>
          </div>
        </div>
      </div>
    );

    const desktop = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
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
        </div>
      </div>
    );

    return (
      <div>
        <BrowserView>
          {" "}
          <div className="d-none d-lg-block ">{desktop}</div>
          <div className="d-none d-md-block d-lg-none">
            {loadingEpisodeAnime ? <Spinner /> : tablet}
          </div>
          <div className="d-none d-sm-block d-md-none ">
            {loadingEpisodeAnime ? <Spinner /> : mobileLandscape}
          </div>
          <div className="d-block d-sm-none ">
            {loadingEpisodeAnime ? <Spinner /> : mobilePotrait}
          </div>
        </BrowserView>{" "}
        <TabletView>{loadingEpisodeAnime ? <Spinner /> : tablet}</TabletView>{" "}
        <MobileView>
          {" "}
          <div className="d-none d-sm-block d-md-none ">
            {loadingEpisodeAnime ? <Spinner /> : mobileLandscape}
          </div>
          <div className="d-block d-sm-none ">
            {loadingEpisodeAnime ? <Spinner /> : mobilePotrait}
          </div>
        </MobileView>
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
