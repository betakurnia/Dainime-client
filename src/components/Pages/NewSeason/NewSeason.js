import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewSeason } from '../../../actions/animeActions';
import ReactPaginate from '../../Common/ReactPaginate';
import EpisodeCard from '../../Anime/AnimeEpisode/EpisodeCard';
import PropTypes from 'prop-types';

class NewSeason extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 0,
    };
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let page = Math.ceil(selected * 16);

    this.props.getNewSeason(page);
  };

  render() {
    const { pageCount } = this.props;

    const newSeason = this.props.newSeason;

    const totalPage = Math.ceil(pageCount / 16);
    return (
      <div>
        <div className="card">
          <div className="card-header utility_background_light-black text-white pagination-sm  ">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className='h5 mb-0'>Season Baru</h2>
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
          <div className="card-body">
          <div className="row ">
            {newSeason.map((anime) => (
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
       
      </div>
    );
  }
}

NewSeason.propTypes = {
  getNewSeason: PropTypes.func.isRequired,
};

export default connect(null, { getNewSeason })(NewSeason);
