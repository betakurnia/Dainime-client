import React from 'react';

function AnimeInfo(props) {
  const anime = props?.anime[0];

  return (
    <div>
      {' '}
      <div className="row mt-4">
        <div className="col-12">
          <img
            className="img-fluid"
            src="/image/episode-anime/AOT.jpeg"
            alt="AOT"
          />
        </div>
        <div className="col-12 col-lg-8">
          <h2 className="text-dark-black mb-0">{anime?.title}</h2>
          <table className="mt-5 anime-description__title ">
            <tr>
              <td>
                <h2 className="mb-0 h5">Tipe</h2>
              </td>
              <td> : </td>
              <td>{anime?.type}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Episode</h2>
              </td>
              <td> : </td>
              <td> {anime?.episodes}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Sumber</h2>
              </td>
              <td> : </td>
              <td> {anime?.source}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Status</h2>
              </td>
              <td> : </td>
              <td> {anime?.status}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Ditayangkan</h2>
              </td>
              <td> : </td>
              <td>{anime?.aired}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Perdana</h2>
              </td>
              <td> : </td>
              <td> {anime?.premiered}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Studio</h2>
              </td>
              <td> : </td>
              <td> {anime?.studio}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Genres</h2>
              </td>
              <td> : </td>
              <td> {anime?.genre ? anime?.genre?.join(',') : ''}</td>
            </tr>
            <tr>
              <td>
                <h2 className="mb-0 h5">Durasi</h2>
              </td>
              <td> : </td>
              <td>{anime?.duration}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnimeInfo;
