import React, { Component } from 'react';
import EpisodeCard from '../../Anime/AnimeEpisode/EpisodeCard';
import ReactPaginate from '../../Common/ReactPaginate';

class HomeAnime extends Component {
  handlePageClick = (data) => {
    let selected = data.selected;
    let page = Math.ceil(selected * 16);

    this.props.getLastRelease(page);
  };

  render() {
    const { lastRelease, pageCount } = this.props;

    const totalPage = Math.ceil(pageCount / 16);

    return (
      <div>
        <div className="card ">
          <div className="card-header utility_background_light-black text-white pagination-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h5 mb-0">Anime</h2>
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
            <div className="row">
              {lastRelease.map((anime) => (
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

export default HomeAnime;
