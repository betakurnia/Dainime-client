import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewSeason } from "../../../actions/animeActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import dateFormat from "dateformat";
import PropTypes from "prop-types";

class NewSeason extends Component {
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

    this.props.getNewSeason(page);
  };

  componentDidMount() {
    document.title = "Dainime | Season baru di Dainime";
  }

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

    const { pageCount } = this.props;

    const newSeason = Array.from(this.props.newSeason);

    const totalPage = Math.ceil(pageCount / 16);

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

    const newSeasoned = newSeason.map((newSeason, index) => (
      <div className={this.props.column} key={newSeason._id}>
        <div>
          <Link
            to={`/${newSeason.title
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
                {newSeason.title + "          "}
              </h4>
            </a>
          </Link>
          <p className="text-light-gray utility_text_14px">
            {" "}
            {dateFormat(newSeason.aired, "mmmm d, yyyy")}
          </p>
          <Link
            to={`/${newSeason.title
              .toLowerCase()
              .split(" ")
              .join("-")}`}
          >
            <img
              className="img-fluid"
              src={`/image/anime/${newSeason.imageAnime}`}
              alt={newSeason.imageAnime}
            />
          </Link>
          {index % this.props.divided === 0 ? (
            <div className="mt-3"></div>
          ) : null}
        </div>
      </div>
    ));
    return (
      <div>
        <div className="card">
          <div className="utility_background_light-black text-white pagination-sm  ">
            <div className="card-header ">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Season Baru</h5>
                <nav aria-label="...">{totalPage !== 1 && reactPaginate}</nav>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row ">{newSeasoned}</div>
          </div>
        </div>
      </div>
    );
  }
}

NewSeason.propTypes = {
  getNewSeason: PropTypes.func.isRequired
};

export default connect(null, { getNewSeason })(NewSeason);
