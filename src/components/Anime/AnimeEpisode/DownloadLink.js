import React from 'react';
import UrlLink from './UrlLink';

function DownloadLink(props) {
  const episode = props.episode;

  return (
    <div>
      <div className="mt-4"></div>
      <div className="row ">
        <div className="col-12">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">FU</th>
                <th scope="col">CU</th>
                <th scope="col">UP</th>
              </tr>
            </thead>
            <tbody className="download-link__table-data">
              {episode.map((link, idx) => (
                <UrlLink
                  key={idx}
                  fileupload360p={link.Fileupload360p}
                  clickNupload360={link.ClickNupload360p}
                  upload360p={link.Upload360p}
                  fileupload480p={link.Fileupload480p}
                  clickNupload480p={link.ClickNupload480p}
                  upload480p={link.Upload480p}
                  upload720={link.Upload720}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
