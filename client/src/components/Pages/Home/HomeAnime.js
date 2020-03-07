import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { getLastRelease } from "../../../actions/episodeAnimeActions";

// npm
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import dateFormat from "dateformat";
import PropTypes from "prop-types";

class HomeAnime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 0
    };
  }

  handlePageClick = data => {
    let selected = data.selected;
    let page = Math.ceil(selected * 16);

    this.props.getLastRelease(page);
  };

  render() {
    dateFormat.i18n = {
      dayNames: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jum'at",
        "Sabtu"
      ],
      monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
    };

    const lastRelease = Array.from(this.props.lastRelease);

    const { pageCount } = this.props;

    const totalPage = Math.ceil(pageCount / 16);

    const lastReleased = lastRelease.map((lastRelease, index) => (
      <div className={this.props.column} key={lastRelease._id}>
        <Link
          to={`/${lastRelease.title
            .toLowerCase()
            .split(" ")
            .join("-")}/episode-${lastRelease.episode}`}
        >
          <a
            href="/#"
            className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
          >
            <h4
              className={`text-uppercase d-flex align-items-end ${this.props.height}`}
            >
              {lastRelease.title}
            </h4>
            <h5>Episode {lastRelease.episode}</h5>
          </a>
        </Link>
        <p className="text-light-gray utility_text_14px">
          {" "}
          {dateFormat(lastRelease.date, "dddd,h:MM TT ")}
        </p>
        <Link
          to={`/${lastRelease.title
            .toLowerCase()
            .split(" ")
            .join("-")}/episode-${lastRelease.episode}`}
        >
          <img
            src={`/image/episode-anime/${lastRelease.imageEpisode}`}
            alt={lastRelease.imageEpisode}
            className="img-fluid"
          />
        </Link>
        {index % this.props.divided === 0 ? <div className="mt-3"></div> : null}
      </div>
    ));

    const reactPaginate = (
      <ReactPaginate
        previousLabel={<i className="	fa fa-caret-left"></i>}
        nextLabel={<i className="	fa fa-caret-right"></i>}
        pageClassName={" page-item"}
        pageCount={totalPage}
        marginPagesDisplayed={0}
        pageRangeDisplayed={4}
        pageLinkClassName={" page-link"}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        breakLabel={"..."}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        previousClassName={" page-item"}
        nextClassName={" page-item"}
        previousLinkClassName={" page-link"}
        nextLinkClassName={" page-link"}
      />
    );

    return (
      <div>
        <div className="card">
          <div className="utility_background_light-black text-white pagination-sm  ">
            <div className="card-header ">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Anime</h5>
                <nav aria-label="...">{totalPage !== 1 && reactPaginate}</nav>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">{lastReleased}</div>
          </div>
        </div>
      </div>
    );
  }
}

HomeAnime.propTypes = {
  getLastRelease: PropTypes.func.isRequired
};

export default connect(null, { getLastRelease })(HomeAnime);
