import React from 'react';
import { Link } from 'react-router-dom';

function OngoingAnime(props) {
  const ongoingAnime = Array.from(props.ongoingAnime);

  const ongoingAnimed = ongoingAnime.map((ongoingAnime) => (
    <div className="mt-2" key={ongoingAnime._id}>
      <Link
        to={`/${ongoingAnime.title
          .toLowerCase()
          .split(' ')
          .join('-')}`}
      >
        <a
          href="/#"
          className="text-light-black utility_text-decoration_underline"
        >
          <h5 className="utility_text_16px text-uppercase">
            {ongoingAnime.title}
          </h5>
        </a>
      </Link>
    </div>
  ));

  return (
    <div>
      {' '}
      <div className="card">
        <div className="utility_background_light-black text-white  ">
          <div className="card-header ">
            <h5>Sedang Berlangsung</h5>
          </div>
        </div>
        <div className="card-body">{ongoingAnimed}</div>
      </div>
    </div>
  );
}

export default OngoingAnime;
