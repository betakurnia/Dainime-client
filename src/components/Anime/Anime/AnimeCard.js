import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { title, episode, imageEpisode } = props;

  return (
    <>
      {' '}
      <a
        href="/#"
        className="text-light-black utility_text-decoration_underline "
      >
        <div className="row">
          <div className="col-lg-4">
            <Link
              to={`/${title
                .toLowerCase()
                .split(' ')
                .join('-')}/episode-${episode}`}
            >
              {' '}
              <img
                className="img-fluid utility_height_125px"
                src="/image/episode-anime/AOT.jpeg"
                alt="AOT"
              />
            </Link>
          </div>

          <div className="col-lg-8">
            <Link
              to={`/${title
                .toLowerCase()
                .split(' ')
                .join('-')}/episode-${episode}`}
            >
              <div className="text-light-black utility_text-decoration_underline  anime-header__title_text_18px">
                <h3 className="mb-0">{title}</h3>
                <h4>Episode {episode}</h4>
              </div>
            </Link>
          </div>
        </div>
      </a>
      <div className="mt-3"></div>
    </>
  );
};

export default Card;
