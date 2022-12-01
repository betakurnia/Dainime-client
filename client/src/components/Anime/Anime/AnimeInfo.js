import React from "react";
import dateFormat from "dateformat";

function AnimeInfo(props) {
  dateFormat.i18n = {
    dayNames: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu"
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
  };

  const anime = Array.from(props.anime);

  const animed = anime.map(anime => (
    <div className="row">
      <div className={props.column}>
        <img
          src={`/image/anime/${anime.imageAnime}`}
          alt={anime.imageAnime}
          className="img-fluid"
        />
      </div>
      <div className={props.column2}>
        <h2 className="text-dark-black ">{anime.title}</h2>
        <div className="mt-5"></div>
        <table className="anime-description__title ">
          <tr>
            <td>
              <h5>Tipe</h5>
            </td>
            <td> : </td>
            <td>{anime.type}</td>
          </tr>
          <tr>
            <td>
              <h5>Episode</h5>
            </td>
            <td> : </td>
            <td> {anime.episodes}</td>
          </tr>
          <tr>
            <td>
              <h5>Sumber</h5>
            </td>
            <td> : </td>
            <td> {anime.source}</td>
          </tr>
          <tr>
            <td>
              <h5>Status</h5>
            </td>
            <td> : </td>
            <td> {anime.status}</td>
          </tr>
          <tr>
            <td>
              <h5>Ditayangkan</h5>
            </td>
            <td> : </td>
            <td>{dateFormat(anime.aired, "	mmmm d, yyyy")}</td>
          </tr>
          <tr>
            <td>
              <h5>Perdana</h5>
            </td>
            <td> : </td>
            <td> {anime.premiered}</td>
          </tr>
          <tr>
            <td>
              <h5>Studio</h5>
            </td>
            <td> : </td>
            <td> {anime.studio}</td>
          </tr>
          <tr>
            <td>
              <h5>Genres</h5>
            </td>
            <td> : </td>
            <td> {anime.genre.join(",")}</td>
          </tr>
          <tr>
            <td>
              <h5>Durasi</h5>
            </td>
            <td> : </td>
            <td>{anime.duration}</td>
          </tr>
        </table>
      </div>
    </div>
  ));
  return <div>{animed}</div>;
}

export default AnimeInfo;
