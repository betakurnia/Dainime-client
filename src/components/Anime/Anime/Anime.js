import React, { Component } from "react";
import AllAnime from "./AllAnime";
import AnimeInfo from "./AnimeInfo";
import RecentRelease from "../../Common/RecentRelease";
import AnimePlaceHolder from "../../Common/AnimePlaceHolder";
import RecentReleasePlaceHolder from "../../Common/RecentReleasePlaceHolder";
import Spinner from "../../Common/Spinner";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getAnime } from "../../../actions/animeActions";
import { getAllEpisode } from "../../../actions/episodeAnimeActions";
import { getAllEpisodePageCount } from "../../../actions/helperActions";
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";

class Anime extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.title !== prevProps.match.params.title) {
      this.props.getAllEpisode(this.props.match.params.title, 0);
    }
  }

  componentDidMount() {
    this.props.getAnime(this.props.match.params.title);

    this.props.getAllEpisode(this.props.match.params.title, 0, true);

    this.props.getAllEpisodePageCount(this.props.match.params.title);
  }

  render() {
    const { anime } = this.props.anime;

    const { allEpisode } = this.props.episodeAnime;

    const { pageCount } = this.props.helper;

    const loading = this.props.episodeAnime.loading;

    const loadingAnime = this.props.episodeAnime.loading;

    const loadingEpisodeAnime = this.props.episodeAnime.loading;

    const mobile = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Videos
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Comment
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  More Info
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="mt-4"></div>
                <div className="d-block d-sm-none ">
                  <AllAnime
                    column="col-6"
                    divided="1"
                    allEpisode={allEpisode}
                    title={this.props.match.params.title}
                    pageCount={pageCount}
                  />
                </div>
                <div className="d-none d-sm-block d-md-none ">
                  <AllAnime
                    column="col-sm-4"
                    divided="1"
                    allEpisode={allEpisode}
                    title={this.props.match.params.title}
                    pageCount={pageCount}
                  />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Comment title={this.props.match.params.title} />
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="mt-4"></div>
                <AnimeInfo column="col-12" column2="col-12" anime={anime} />
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
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Videos
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Comment
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  More Info
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="mt-4"></div>

                <AllAnime
                  column="col-md-3"
                  divided="3"
                  allEpisode={allEpisode}
                  title={this.props.match.params.title}
                  pageCount={pageCount}
                />
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Comment title={this.props.match.params.title} />
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="mt-4"></div>
                <AnimeInfo column="col-md-4" column2="col-md-8" anime={anime} />
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
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Videos
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Comment
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  More Info
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="mt-4"></div>
                {loadingAnime ? (
                  <AnimePlaceHolder />
                ) : (
                  <AllAnime
                    column="col-lg-3"
                    divided="3"
                    allEpisode={allEpisode}
                    title={this.props.match.params.title}
                    pageCount={pageCount}
                  />
                )}
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Comment title={this.props.match.params.title} />
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="mt-4"></div>
                <AnimeInfo column="col-lg-4" column2="col-lg-8" anime={anime} />
              </div>
            </div>
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
          <div className="d-block d-md-none">
            {loading ? <Spinner /> : mobile}
          </div>
        </BrowserView>{" "}
        <TabletView>{loading ? <Spinner /> : tablet}</TabletView>{" "}
        <MobileView> {loading ? <Spinner /> : mobile}</MobileView>
      </div>
    );
  }
}

Anime.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getAnime: PropTypes.func.isRequired,
  getAllEpisode: PropTypes.func.isRequired,
  getAllEpisodePageCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
  helper: state.helper
});

export default connect(mapStateToProps, {
  getAnime,
  getAllEpisode,
  getAllEpisodePageCount
})(Anime);
