import React, { Component } from "react";
import NewSeason from "./NewSeason";
import RecentRelease from "../../Common/RecentRelease";
import AnimePlaceHolder from "../../Common/AnimePlaceHolder";
import RecentReleasePlaceHolder from "../../Common/RecentReleasePlaceHolder";
import Spinner from "../../Common/Spinner";
import { connect } from "react-redux";
import { getNewSeason } from "../../../actions/animeActions";
import { getNewSeasonCount } from "../../../actions/helperActions";
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";

class NewSeasons extends Component {
  componentDidMount() {
    this.props.getNewSeason(0, true);

    this.props.getNewSeasonCount();
  }

  render() {
    const { newSeason } = this.props.anime;

    const { pageCount } = this.props.helper;

    const loading = this.props.anime.loading;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    const mobilePotrait = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NewSeason
              column="col-6"
              divided="1"
              height="utility_height_60px"
              newSeason={newSeason}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    );

    const mobileLandscape = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NewSeason
              column="col-sm-4"
              divided="1"
              height="utility_height_60px"
              newSeason={newSeason}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    );

    const tablet = (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NewSeason
              column="col-md-3"
              divided="3"
              height="utility_height_40px"
              newSeason={newSeason}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    );

    const desktop = (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {loadingAnime ? (
              <AnimePlaceHolder />
            ) : (
              <NewSeason
                column="col-lg-3"
                divided="3"
                height="utility_height_40px"
                newSeason={newSeason}
                pageCount={pageCount}
              />
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
    );

    return (
      <div>
        <BrowserView>
          {" "}
          <div className="d-none d-lg-block ">{desktop}</div>
          <div className="d-none d-md-block d-lg-none">
            {loading ? <Spinner /> : tablet}
          </div>
          <div className="d-none d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobileLandscape}
          </div>
          <div className="d-block d-sm-none ">
            {loading ? <Spinner /> : mobilePotrait}
          </div>
        </BrowserView>{" "}
        <TabletView>{loading ? <Spinner /> : tablet}</TabletView>{" "}
        <MobileView>
          {" "}
          <div className="d-none d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobileLandscape}
          </div>
          <div className="d-block d-sm-none ">
            {loading ? <Spinner /> : mobilePotrait}
          </div>
        </MobileView>
      </div>
    );
  }
}

NewSeasons.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getNewSeason: PropTypes.func.isRequired,
  getNewSeasonCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
  helper: state.helper
});

export default connect(mapStateToProps, { getNewSeason, getNewSeasonCount })(
  NewSeasons
);
