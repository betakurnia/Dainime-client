import React from 'react';

function DownloadLink(props) {
  const episode = Array.from(props.episode);

  const episoded = episode.map((episode) => (
    <>
      <tr>
        <th scope="row">360p</th>
        <td>
          {episode.FileUpload360p === '' ? (
            <p className="text-muted">FileUpload</p>
          ) : (
            <a href={episode.FileUpload360p}>FileUpload</a>
          )}
        </td>
        <td>
          {episode.ClickNUpload360p === '' ? (
            <p className="text-muted">{props.clickNupload}</p>
          ) : (
            <a href={episode.ClickNUpload360p}>{props.clickNupload}</a>
          )}
        </td>
        <td>
          {episode.Upload360p === '' ? (
            <p className="text-muted">Upload</p>
          ) : (
            <a href={episode.Upload360p}>Upload</a>
          )}
        </td>
      </tr>
      <tr>
        <th scope="row">480p</th>
        <td>
          {episode.FileUpload480p === '' ? (
            <p className="text-muted">FileUpload</p>
          ) : (
            <a href={episode.FileUpload480p}>FileUpload</a>
          )}
        </td>
        <td>
          {episode.ClickNUpload480p === '' ? (
            <p className="text-muted">{props.clickNupload}</p>
          ) : (
            <a href={episode.ClickNUpload480p}>{props.clickNupload}</a>
          )}
        </td>
        <td>
          {episode.Upload480p === '' ? (
            <p className="text-muted">Upload</p>
          ) : (
            <a href={episode.Upload480p}>Upload</a>
          )}
        </td>
      </tr>
      <tr>
        <th scope="row">720p</th>
        <td>
          {episode.FileUpload480p === '' ? (
            <p className="text-muted">FileUpload</p>
          ) : (
            <a href={episode.FileUpload480p}>FileUpload</a>
          )}
        </td>
        <td>
          {episode.ClickNUpload480p === '' ? (
            <p className="text-muted">{props.clickNupload}</p>
          ) : (
            <a href={episode.ClickNUpload480p}>{props.clickNupload}</a>
          )}
        </td>
        <td>
          {episode.Upload720p === '' ? (
            <p className="text-muted">Upload</p>
          ) : (
            <a href={episode.Upload720p}>Upload</a>
          )}
        </td>
      </tr>
    </>
  ));

  return (
    <div>
      <div className="mt-4"></div>
      <div className="row ">
        <div className={`${props.column}`}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">FU</th>
                <th scope="col">CU</th>
                <th scope="col">UP</th>
              </tr>
            </thead>
            <tbody className="download-link__table-data">{episoded}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
