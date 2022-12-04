import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllEpisode } from '../../../actions/episodeAnimeActions';
import ReactPaginate from '../../Common/ReactPaginate';
import EpisodeCard from '../../Anime/AnimeEpisode/EpisodeCard';

class AllAnime extends Component {
  handlePageClick = (data) => {
    let selected = data.selected;
    let page = Math.ceil(selected * 24);

    this.props.getAllEpisode(this.props.title, page);
  };

  render() {
    const totalPage = Math.ceil(this.props.pageCount / 24);

    const allEpisode = this.props.allEpisode;

    return (
      <div>
        <div className="card">
          <div className="card-header utility_background_light-black text-white pagination-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Anime</h5>
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
            {allEpisode.map((anime) => (
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

export default connect(null, { getAllEpisode })(AllAnime);
