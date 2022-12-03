import React, { Component } from "react";
import { connect } from "react-redux";
import { getLastRelease } from "../../../actions/episodeAnimeActions";
import Card from '../../Anime/AnimeEpisode/Card'
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import moment from "moment"; 


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
    const lastRelease = Array.from(this.props.lastRelease);

    const { pageCount } = this.props;

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
            <div className="row">
              {lastRelease.map(anime => (
                <div className="col-6 col-md-4 col-lg-3">
                <Card key={anime._id} title={anime.title} episode={anime.episode} date={anime.date} imageEpisode={anime.imageEpisode} />
</div>
))}
         </div>
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
