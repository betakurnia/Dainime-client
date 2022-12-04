import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLastRelease2 } from '../../actions/episodeAnimeActions';
import AnimeCard from '../Anime/Anime/AnimeCard';

class RecentRelease extends Component {
  componentDidMount() {
    this.props.getLastRelease2(8);
  }

  render() {
    const lastRelease = this.props.episodeAnime.lastReleased;

    return (
      <div>
        <div className="card">
            <div className="card-header utility_background_light-black text-white  ">
              <h2 className="h5 mb-0">Rilis Terakhir</h2>
            </div>
          </div>
          <div className="card-body bg-white">
            {lastRelease.map((anime) => (
              <AnimeCard
                key={anime._id}
                title={anime.title}
                episode={anime.episode}
                imageEpisode={anime.imageEpisode}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  episodeAnime: state.episodeAnime,
});

export default connect(mapStateToProps, { getLastRelease2 })(RecentRelease);
