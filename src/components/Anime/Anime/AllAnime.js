import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { getAllEpisode } from "../../../actions/episodeAnimeActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

class AllAnime extends Component {
  handlePageClick = data => {
    let selected = data.selected;
    let page = Math.ceil(selected * 24);

    this.props.getAllEpisode(this.props.title, page);
  };

  render() {
    const totalPage = Math.ceil(this.props.pageCount / 24);

    const allEpisode = Array.from(this.props.allEpisode);

    const allEpisoded = allEpisode.map((allEpisode, index) => (
      <div className={this.props.column} key={allEpisode._id}>
        <Link
          to={`/${allEpisode.title
            .toLowerCase()
            .split(" ")
            .join("-")}/episode-${allEpisode.episode}`}
        >
          <a
            href="/#"
            className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
          >
            <h4 className="text-uppercase">{allEpisode.title}</h4>
            <h5>Episode {allEpisode.episode}</h5>
          </a>
        </Link>
        <p className="text-light-gray utility_text_14px">
          {" "}
          {moment(allEpisode.date, "dddd,h:MM TT ")}
        </p>
        <Link
          to={`/${allEpisode.title
            .toLowerCase()
            .split(" ")
            .join("-")}/episode-${allEpisode.episode}`}
        >
          <img
            src={`/image/episode-anime/${allEpisode.imageEpisode}`}
            alt={allEpisode.imageEpisode}
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
            <div className="row">{allEpisoded}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getAllEpisode })(AllAnime);
