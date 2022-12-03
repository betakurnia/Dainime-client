import React from 'react'
import { Link } from "react-router-dom";
import moment from "moment"; 


const Card = (props) => {
    const { title, episode, date,  imageEpisode } = props;

  return (
    <>
    <Link
      to={`/${title
        .toLowerCase()
        .split(" ")
        .join("-")}/episode-${episode}`}
    >
      <a
        href="/#"
        className=" text-light-black utility_text-decoration_underline  anime-header__title_text_18px"
      >
        <h4
          className={`text-uppercase d-flex align-items-end`}
        >
          {title}
        </h4>
        <h5>Episode {episode}</h5>
      </a>
    </Link>
    <p className="text-light-gray utility_text_14px">
      {" "}
      {moment(date, "dddd,h:MM TT ")}
    </p>
    <Link
      to={`/${title
        .toLowerCase()
        .split(" ")
        .join("-")}/episode-${episode}`}
    >
      <img
        src={`./image/episode-anime/${imageEpisode}`}
        alt={imageEpisode}
        className="img-fluid"
      />
    </Link>
  </>
  )
}

export default Card