import React, { Component } from "react";
import { connect } from "react-redux";
import { getAnimeList } from "../../../actions/animeActions";
import { getAnimeListSort } from "../../../actions/animeActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import dateFormat from "dateformat";
import PropTypes from "prop-types";

class AllAnimeList extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = data => {
    let selected = data.selected;
    let page = Math.ceil(selected * 16);
    if (this.props.sort) {
      this.props.getAnimeListSort(this.props.sort, page);
    } else {
      this.props.getAnimeList(page);
    }
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
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ],
      timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
    };

    const alphabet = this.props.alphabet[0];
    const alphabet2 = this.props.alphabet[1];
    const alphabet3 = this.props.alphabet[2];

    const { pageCount } = this.props;

    const animeList = Array.from(this.props.animeList);

    const totalPage = Math.ceil(pageCount / 16);

    const animeListed = animeList.map((animeList, index) => (
      <div className={this.props.column} key={animeList._id}>
        <div>
          <Link
            to={`/${animeList.title
              .toLowerCase()
              .split(" ")
              .join("-")}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
            >
              <h4
                className={`text-uppercase ${this.props.height} d-flex align-items-end`}
              >
                {animeList.title + "          "}
              </h4>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {dateFormat(animeList.aired, "mmmm d, yyyy")}
          </p>
          <Link
            to={`/${animeList.title
              .toLowerCase()
              .split(" ")
              .join("-")}`}
          >
            <img
              className="img-fluid"
              src={`/image/anime/${animeList.imageAnime}`}
              alt={animeList.imageAnime}
            />
          </Link>
          {index % this.props.divided === 0 ? (
            <div className="mt-3"></div>
          ) : null}
        </div>
      </div>
    ));

    const alphabeted = alphabet.map((alphabet, index) => (
      <Link to={`/anime-list/${alphabet}`} key={index}>
        <button className="btn btn-light btn-sm">{alphabet}</button>
      </Link>
    ));

    const alphabeted2 = alphabet2.map((alphabeted2, index) => (
      <Link to={`/anime-list/${alphabeted2}`} key={index}>
        <button className="btn btn-light btn-sm">{alphabeted2}</button>
      </Link>
    ));

    let alphabeted3;
    if (alphabet3) {
      alphabeted3 = alphabet3.map((alphabeted3, index) => (
        <Link to={`/anime-list/${alphabeted3}`} key={index}>
          <button className="btn btn-light btn-sm">{alphabeted3}</button>
        </Link>
      ));
    }

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
                <h5>Daftar Anime</h5>
                <nav aria-label="...">{totalPage !== 1 && reactPaginate}</nav>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between">
                  <Link to={`/anime-list`}>
                    <button className="btn btn-light btn-sm">All</button>
                  </Link>
                  {alphabeted}
                </div>
                <div className="mt-3"></div>
                <div className="d-flex justify-content-between">
                  {alphabeted2}
                </div>
                <div className="mt-3"></div>
                <div className="d-flex justify-content-between">
                  {alphabeted3}
                </div>
                <div className="mt-3"></div>
              </div>
            </div>
            <div className="row">{animeListed}</div>
          </div>
        </div>
      </div>
    );
  }
}

AllAnimeList.propTypes = {
  getAnimeList: PropTypes.func.isRequired
};

export default connect(null, { getAnimeList, getAnimeListSort })(AllAnimeList);
