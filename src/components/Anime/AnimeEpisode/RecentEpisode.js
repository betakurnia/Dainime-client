import React, { Component } from "react";
import { getLastEpisode } from "../../../actions/episodeAnimeActions";
import { getEpisodeCount } from "../../../actions/helperActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class RecentEpisode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRenderData: true,
      data: [],
      data2: [],
      data3: [],
      data4: [],
      data5: []
    };
  }

  componentDidMount() {
    this.props.getLastEpisode(this.props.title);

    this.props.getEpisodeCount(this.props.title);
  }

  render() {

    const FakeComoponent = (
      <div className={this.props.column}>
        <div className="utility_visibility_hidden">
          <Link to={`/blabla`}>
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode </h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px"> 1 Jan 2020</p>
          <Link to={`blabla`}>
            <img
              src={`/image/helper/FakeImage.jpg`}
              alt="fakeImage"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
    );

    const lastEpisode = Array.from(
      this.props.episodeAnime.lastEpisode
    ).reverse();

    const dataLength = lastEpisode.length;

    let temp = [];

    if (dataLength > 1 && dataLength <= 5) {
      lastEpisode.reverse();
    }

    if (dataLength > 5 && dataLength <= 10) {
      let removed = dataLength % 5;
      if (removed === 0) {
        removed = 5;
      }
      temp = lastEpisode.slice(5, dataLength).reverse();
      lastEpisode.splice(5, removed);
      lastEpisode.reverse();
      lastEpisode.push(...temp);
    }

    if (dataLength > 10 && dataLength <= 15) {
      let removed = dataLength % 5;
      if (removed === 0) {
        removed = 5;
      }
      temp = lastEpisode.slice(10, dataLength).reverse();
      lastEpisode.splice(10, removed);
      lastEpisode.reverse();
      lastEpisode.push(...temp);
    }

    if (dataLength > 15 && dataLength <= 20) {
      let removed = dataLength % 5;
      if (removed === 0) {
        removed = 5;
      }
      temp = lastEpisode.slice(15, dataLength).reverse();
      lastEpisode.splice(15, removed);
      lastEpisode.reverse();
      lastEpisode.push(...temp);
    }

    if (dataLength > 20 && dataLength <= 25) {
      let removed = dataLength % 5;
      if (removed === 0) {
        removed = 5;
      }
      temp = lastEpisode.slice(20, dataLength).reverse();
      lastEpisode.splice(20, removed);
      lastEpisode.reverse();
      lastEpisode.push(...temp);
    }

    let data = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];

    let FakeComponented;
    let FakeComponented2;
    let FakeComponented3;
    let FakeComponented4;
    let FakeComponented5;

    if (dataLength === 2 || dataLength === 1) {
      FakeComponented = [FakeComoponent, FakeComoponent];
    }

    if (dataLength === 6 || dataLength === 7) {
      FakeComponented2 = [FakeComoponent, FakeComoponent];
    }

    if (dataLength === 11 || dataLength === 12) {
      FakeComponented3 = [FakeComoponent, FakeComoponent];
    }

    if (dataLength === 16 || dataLength === 17) {
      FakeComponented4 = [FakeComoponent, FakeComoponent];
    }

    if (dataLength === 21 || dataLength === 22) {
      FakeComponented5 = [FakeComoponent, FakeComoponent];
    }

    if (dataLength >= 5) {
      data = lastEpisode.slice(0, 5);
      if (dataLength >= 10) {
        data2 = lastEpisode.slice(5, 10);
        if (dataLength >= 15) {
          data3 = lastEpisode.slice(10, 15);
          if (dataLength >= 20) {
            data4 = lastEpisode.slice(15, 20);
            if (dataLength >= 21) {
              data5 = lastEpisode.slice(20, dataLength);
            }
          } else {
            data4 = lastEpisode.slice(15, dataLength);
          }
        } else {
          data3 = lastEpisode.slice(10, dataLength);
        }
      } else {
        data2 = lastEpisode.slice(5, dataLength);
      }
    } else {
      data = lastEpisode.slice(0, dataLength);
    }

    const lastEpisoded = data.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {moment(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid utlity__z-index_1"
          />
        </div>
      </React.Fragment>
    ));

    const lastEpisoded2 = data2.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {moment(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid"
          />
        </div>
      </React.Fragment>
    ));

    const lastEpisoded3 = data3.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {moment(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid"
          />
        </div>
      </React.Fragment>
    ));

    const lastEpisoded4 = data4.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {moment(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid"
          />
        </div>
      </React.Fragment>
    ));

    const lastEpisoded5 = data5.reverse().map(lastEpisode => (
      <React.Fragment>
        <div className={this.props.column}>
          <Link
            to={`/${lastEpisode.title
              .toLowerCase()
              .split(" ")
              .join("-")}/episode-${lastEpisode.episode}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h5>Episode {lastEpisode.episode}</h5>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {moment(lastEpisode.date, "h:MM TT ")}
          </p>
          <img
            src={`/image/episode-anime/${lastEpisode.imageEpisode}`}
            alt={lastEpisode.imageEpisode}
            className="img-fluid"
          />
        </div>
      </React.Fragment>
    ));

    let totalData = [];

    if (dataLength >= 1) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded}
            {FakeComponented}
            <div className="offset-1"></div>
          </div>
        </div>
      );
    }

    if (dataLength > 5) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded2}
            {FakeComponented2}
            <div className="offset-1"></div>
          </div>{" "}
        </div>
      );
    }

    if (dataLength > 10) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded3}
            {FakeComponented3}
            <div className="offset-1"></div>
          </div>{" "}
        </div>
      );
    }

    if (dataLength > 15) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded4}
            {FakeComponented4}
            <div className="offset-1"></div>
          </div>{" "}
        </div>
      );
    }

    if (dataLength > 20) {
      totalData.unshift(
        <div className="d-flex utility_background_white">
          <div className="row">
            <div className="offset-1"></div>
            {lastEpisoded5}
            {FakeComponented5}
            <div className="offset-1"></div>
          </div>{" "}
        </div>
      );
    }

    return (
      <div>
        <div className="mt-4"></div>
        <div className="card">
          <div className="utility_background_light-black text-white  ">
            <div className="card-header   ">
              <h5>Episode Terakhir</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="row ">
              <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                width="100%"
              >
                {totalData}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RecentEpisode.propTypes = {
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getLastEpisode: PropTypes.func.isRequired,
  getEpisodeCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  episodeAnime: state.episodeAnime,
  helper: state.helper
});

export default connect(mapStateToProps, {
  getLastEpisode,
  getEpisodeCount
})(RecentEpisode);
