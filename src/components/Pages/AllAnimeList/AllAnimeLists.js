import React, { Component } from "react";
import AllAnimeList from "./AllAnimeList";
import RecentRelease from "../../Common/RecentRelease";
import AnimePlaceHolder from "../../Common/AnimePlaceHolder";
import RecentReleasePlaceHolder from "../../Common/RecentReleasePlaceHolder";
import Spinner from "../../Common/Spinner";
import { connect } from "react-redux";
import { getAnimeList, getAnimeListSort } from "../../../actions/animeActions";
import { getAnimeListPageCount } from "../../../actions/helperActions";
import PropTypes from "prop-types";

class AllAnimeLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: ["A", "B", "C", "D", "E", "F", "G", "H"],
      alphabet2: ["I", "J", "K", "L", "M", "N", "O", "P", "Q"],
      alphabet3: ["R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      alphabetDesktop: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M"
      ],
      alphabetDesktop2: [
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  }

  componentDidMount() {
    this.props.getAnimeList(0, true);

    this.props.getAnimeListPageCount();

    document.title = "Dainime | Daftar anime di Dainime";
  }

  render() {
    const { animeList } = this.props.anime;

    const { pageCount } = this.props.helper;

    const loading = this.props.anime.loading;

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
              <AllAnimeList
                column="col-lg-3"
                divided="3"
                height="utility_height_40px"
                animeList={animeList}
                pageCount={pageCount}
                alphabet={[
                  this.state.alphabetDesktop,
                  this.state.alphabetDesktop2
                ]}
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
  getAnimeListPageCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
  helper: state.helper
});

export default connect(mapStateToProps, {
  getAnimeList,
  getAnimeListSort,
  getAnimeListPageCount
})(AllAnimeLists);
