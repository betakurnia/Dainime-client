import React from 'react';
import Title from '../../Anime/Anime/Title';

function OngoingAnime(props) {
  const { ongoingAnime } = props;

  return (
    <div>
      {' '}
      <div className="card">
        <div className="card-header utility_background_light-black">
          <h2 className="h5 mb-0 text-white">Sedang Berlangsung</h2>
        </div>
        <div className="card-body">
          {ongoingAnime.map((anime) => (
            <Title key={anime._id} title={anime.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OngoingAnime;
