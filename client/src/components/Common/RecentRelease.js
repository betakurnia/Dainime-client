import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { getLastRelease2 } from "../../actions/episodeAnimeActions";

// npm
import { Link } from "react-router-dom";

class RecentRelease extends Component {
  componentDidMount() {
    this.props.getLastRelease2(8);
  }

  render() {
    const lastRelease = Array.from(this.props.episodeAnime.lastReleased);

    // Looping data
    const lastReleased = lastRelease.map(lastRelease => (
      <React.Fragment>
        {" "}
        <a
          href="/#"
          className="text-light-black utility_text-decoration_underline "
        >
          <div className="row">
            <div className="col-lg-4">
              <Link
                to={`/${lastRelease.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}/episode-${lastRelease.episode}`}
              >
                {" "}
                <img
                  className="img-fluid utility_height_125px"
                  src={`/image/episode-anime/${lastRelease.imageEpisode}`}
                  alt={lastRelease.imageEpisode}
                />
              </Link>
            </div>

            <div className="col-lg-8">
              <Link
                to={`/${lastRelease.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}/episode-${lastRelease.episode}`}
              >
                <div className="text-light-black utility_text-decoration_underline  anime-header__title_text_18px">
                  <h5>{lastRelease.title}</h5>
                  <h5>Episode {lastRelease.episode}</h5>
                </div>
              </Link>
            </div>
          </div>
        </a>
        <div className="mt-3"></div>
      </React.Fragment>
    ));

    return (
      <div>
        <div className="card">
          <div className="utility_background_light-black text-white  ">
            <div className="card-header ">
              <h5>Rilis Terakhir</h5>
            </div>
          </div>
          <div className="card-body">{lastReleased}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeAnime: state.episodeAnime
});

export default connect(mapStateToProps, { getLastRelease2 })(RecentRelease);
