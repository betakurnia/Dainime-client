import React from 'react';

const UrlLink = (props) => {
  const {
    fileupload360p,
    clickNupload360p,
    upload360p,
    fileupload480p,
    clickNupload480p,
    upload480p,
    upload720,
  } = props;

  return (
    <>
      <tr>
        <th scope="row">360p</th>
        <td>
          {fileupload360p === '' ? (
            <p className="text-muted">FileUpload</p>
          ) : (
            <a href={fileupload360p}>FileUpload</a>
          )}
        </td>
        <td>
          {clickNupload360p === '' ? (
            <p className="text-muted">ClickNUpload</p>
          ) : (
            <a href={clickNupload360p}>ClickNUpload</a>
          )}
        </td>
        <td>
          {upload360p === '' ? (
            <p className="text-muted">Upload</p>
          ) : (
            <a href={upload360p}>Upload</a>
          )}
        </td>
      </tr>
      <tr>
        <th scope="row">480p</th>
        <td>
          {fileupload480p === '' ? (
            <p className="text-muted">FileUpload</p>
          ) : (
            <a href={fileupload480p}>FileUpload</a>
          )}
        </td>
        <td>
          {clickNupload480p === '' ? (
            <p className="text-muted">ClickNUpload</p>
          ) : (
            <a href={clickNupload480p}>ClickNUpload</a>
          )}
        </td>
        <td>
          {upload480p === '' ? (
            <p className="text-muted">Upload</p>
          ) : (
            <a href={upload480p}>Upload</a>
          )}
        </td>
      </tr>
      <tr>
        <th scope="row">720p</th>
        <td>
          {fileupload480p === '' ? (
            <p className="text-muted">FileUpload</p>
          ) : (
            <a href={fileupload480p}>FileUpload</a>
          )}
        </td>
        <td>
          {clickNupload480p === '' ? (
            <p className="text-muted">ClickNUpload</p>
          ) : (
            <a href={clickNupload480p}>ClickNUpload</a>
          )}
        </td>
        <td>
          {upload720 === '' ? (
            <p className="text-muted">Upload</p>
          ) : (
            <a href={upload720}>Upload</a>
          )}
        </td>
      </tr>
    </>
  );
};

export default UrlLink;
