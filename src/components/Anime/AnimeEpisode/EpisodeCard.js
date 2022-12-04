import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Card = (props) => {
  const { title, episode, date, imageEpisode } = props;

  return (
    <>
      <Link
        to={`/${title
          .toLowerCase()
          .split(' ')
          .join('-')}${episode ? `/episode-${episode}` : ''}`}
        className="utility_height_125px"
      >
        <a
          href="/#"
          className="text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
        >
          <h3
            className={`mb-0 text-uppercase d-flex align-items-end utility_height_40px overflow-hidden`}
          >
            {title}
          </h3>
          {episode && <h4>Episode {episode}</h4>}
        </a>
      </Link>
      <p className="text-light-gray utility_text_14px">
        {' '}
        {moment(date, 'YYYYMMDD').fromNow()}
      </p>
      <Link
        to={`/${title
          .toLowerCase()
          .split(' ')
          .join('-')}/episode-${episode}`}
      >
        <img
          src={`./image/episode-anime/AOT.jpeg`}
          alt={imageEpisode}
          className="img-fluid"
        />
      </Link>
    </>
  );
};

export default Card;
