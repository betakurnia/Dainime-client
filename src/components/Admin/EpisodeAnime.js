import React, { Component } from "react";
import httpClient from '../utils/httpClient'

class EpisodeAnime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anime: "",
      episode: "",
      FileUpload360p: "",
      FileUpload480p: "",
      FileUpload720p: "",
      ClickNUpload360p: "",
      ClickNUpload480p: "",
      ClickNUpload720p: "",
      Upload360p: "",
      Upload480p: "",
      Upload720p: "",
      imageEpisode: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileChange(e) {
    // console.log(e.target.files[0]);
    this.setState({ imageEpisode: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();

    const newEpisodeAnime = {
      anime: this.state.anime,
      title: this.state.title,
      episode: this.state.episode,
      FileUpload360p: this.state.FileUpload360p,
      FileUpload480p: this.state.FileUpload480p,
      FileUpload720p: this.state.FileUpload720p,
      ClickNUpload360p: this.state.ClickNUpload360p,
      ClickNUpload480p: this.state.ClickNUpload480p,
      ClickNUpload720p: this.state.ClickNUpload720p,
      Upload360p: this.state.Upload360p,
      Upload480p: this.state.Upload480p,
      Upload720p: this.state.Upload720p
    };

    httpClient
      .post("/api/admin/episode-anime", newEpisodeAnime)
      .then(res => {
        console.log("Add episode anime success");
        const formData = new FormData();
        formData.append("imageEpisode", this.state.imageEpisode);
        httpClient
          .post(
            `/api/admin/episode-anime/${res.data._id}`,
            formData,
            {
              headers: {
                "content-type": "multipart/form-data"
              }
            }
          )
          .then(res => console.log("Add file success"))
          .catch(err => console.log(err.response.data));
      })
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center text-light-black">
                <h1>Episode Anime</h1>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="anime">Anime</label>
                  <input
                    type="text"
                    className="form-control"
                    id="anime"
                    placeholder="Enter Anime"
                    name="anime"
                    value={this.state.anime}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="episode">Episode</label>
                  <input
                    type="text"
                    className="form-control"
                    id="episode"
                    placeholder="Enter Episode"
                    name="episode"
                    value={this.state.episode}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <h2>360p</h2>
                  <label for="FileUpload360p">FileUpload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FileUpload360p"
                    placeholder="Enter FileUpload 360p"
                    name="FileUpload360p"
                    value={this.state.FileUpload360p}
                    onChange={this.onChange}
                  />
                  <label for="ClickNUpload360p">ClickNUpload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ClickNUpload360p"
                    placeholder="Enter ClickNUpload 360p"
                    name="ClickNUpload360p"
                    value={this.state.ClickNUpload360p}
                    onChange={this.onChange}
                  />
                  <label for="Upload360p">Upload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Upload360p"
                    placeholder="Enter Upload 360p"
                    name="Upload360p"
                    value={this.state.Upload360p}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <h2>480p</h2>
                  <label for="FileUpload480p">FileUpload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FileUpload480p"
                    placeholder="Enter FileUpload 480p"
                    name="FileUpload480p"
                    value={this.state.FileUpload480p}
                    onChange={this.onChange}
                  />
                  <label for="ClickNUpload480p">ClickNUpload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ClickNUpload480p"
                    placeholder="Enter ClickNUpload 480p"
                    name="ClickNUpload480p"
                    value={this.state.ClickNUpload480p}
                    onChange={this.onChange}
                  />
                  <label for="Upload480p">Upload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Upload480p"
                    placeholder="Enter Upload 480p"
                    name="Upload480p"
                    value={this.state.Upload480p}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <h2>720p</h2>
                  <label for="FileUpload720p">FileUpload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FileUpload720p"
                    placeholder="Enter FileUpload 720p"
                    name="FileUpload720p"
                    value={this.state.FileUpload720p}
                    onChange={this.onChange}
                  />
                  <label for="ClickNUpload720p">ClickNUpload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ClickNUpload720p"
                    placeholder="Enter ClickNUpload 720p"
                    name="ClickNUpload720p"
                    value={this.state.ClickNUpload720p}
                    onChange={this.onChange}
                  />
                  <label for="Upload720p">Upload</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Upload720p"
                    placeholder="Enter Upload 720p"
                    name="Upload720p"
                    value={this.state.Upload720p}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="image">Image Episode</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    onChange={this.onFileChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EpisodeAnime;
