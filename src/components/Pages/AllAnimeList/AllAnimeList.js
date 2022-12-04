import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimeList } from '../../../actions/animeActions';
import { getAnimeListSort } from '../../../actions/animeActions';
import EpisodeCard from '../../Anime/AnimeEpisode/EpisodeCard';
import ReactPaginate from '../../Common/ReactPaginate';
import PropTypes from 'prop-types';

class AllAnimeList extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let page = Math.ceil(selected * 16);
    if (this.props.sort) {
      this.props.getAnimeListSort(this.props.sort, page);
    } else {
      this.props.getAnimeList(page);
    }
  };

  render() {
    const { pageCount } = this.props;

    const animeList = this.props.animeList;

    const totalPage = Math.ceil(pageCount / 16);

    return (
      <div>
        <div className="card">
          <div className="card-header utility_background_light-black text-white pagination-sm  ">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">Daftar Anime</h2>
              <nav>
                {totalPage !== 1 && (
                  <ReactPaginate
                    totalPage={totalPage}
                    onPageChange={this.handlePageClick}
                  />
                )}
              </nav>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            {animeList.map((anime) => (
              <div key={anime._id} className="col-6 col-md-4 col-lg-3 mt-3">
                <EpisodeCard
                  title={anime.title}
                  episode={anime.episode}
                  date={anime.date}
                  imageEpisode={anime.imageEpisode}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

AllAnimeList.propTypes = {
  getAnimeList: PropTypes.func.isRequired,
};

export default connect(null, { getAnimeList, getAnimeListSort })(AllAnimeList);
