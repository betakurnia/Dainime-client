import React, { Component } from "react";
import httpClient from '../utils/httpClient'

class Anime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      synopsis: "",
      type: "",
      status: "",
      aired: "",
      genre: "",
      episodes: "",
      premiered: "",
      studio: "",
      source: "",
      duration: "",
      imageAnime: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileChange(e) {
    this.setState({ imageAnime: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();

    const newAnime = {
      title: this.state.title,
      synopsis: this.state.synopsis,
      type: this.state.type,
      status: this.state.status,
      aired: this.state.aired,
      genre: this.state.genre,
      episodes: this.state.episodes,
      premiered: this.state.premiered,
      studio: this.state.studio,
      source: this.state.source,
      duration: this.state.duration
    };

    httpClient
      .post("/api/admin/anime", newAnime)
      .then(res => {
        console.log("Add anime success");
        const formData = new FormData();
        formData.append("imageAnime", this.state.imageAnime);
        httpClient
          .post(
            `/api/admin/anime/${res.data._id}`,
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
    const optionsType = [
      { label: "* Select type", value: 0 },
      { label: "TV", value: "TV" },
      { label: "Movie", value: "Movie " },
      { label: "OVA ", value: "OVA" },
      { label: "Special", value: "Special" },
      { label: "Music", value: "Music" }
    ];

    const optionStatus = [
      { label: "* Select status", value: 0 },
      { label: "Airing", value: "Airing" },
      { label: "Finished", value: "Finished " }
    ];

    const selectOptionsType = optionsType.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    const selectOptionsStatus = optionStatus.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center text-light-black">
                <h1>Anime</h1>
              </div>
              <form onSubmit={this.onSubmit}>
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
                  <label for="synopsis">Synopsis:</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="synopsis"
                    name="synopsis"
                    value={this.state.synopsis}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label for="type">Type</label>
                  <select
                    className="form-control"
                    id="type"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                  >
                    {selectOptionsType}
                  </select>
                </div>
                <div className="form-group">
                  <label for="Status">Status</label>
                  <select
                    className="form-control"
                    id="type"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    {selectOptionsStatus}
                  </select>
                </div>
                <div className="form-group">
                  <label for="aired">Aired</label>
                  <input
                    type="text"
                    className="form-control"
                    id="aired"
                    placeholder="Enter Aired"
                    name="aired"
                    value={this.state.aired}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="genre">
                    Genre Separated by ","
                    <strong> example: action,ecchi,hentai</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    placeholder="Enter Genre "
                    name="genre"
                    value={this.state.genre}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="episode">Episodes</label>
                  <input
                    type="text"
                    className="form-control"
                    id="episode"
                    placeholder="Enter Episodes"
                    name="episodes"
                    value={this.state.episodes}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="premiered">Premiered</label>
                  <input
                    type="text"
                    className="form-control"
                    id="premiered"
                    placeholder="Enter Premiered"
                    name="premiered"
                    value={this.state.premiered}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="studio">Studio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studio"
                    placeholder="Enter Studio"
                    name="studio"
                    value={this.state.studio}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="source">Source</label>
                  <input
                    type="text"
                    className="form-control"
                    id="source"
                    placeholder="Enter Source"
                    name="source"
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="duration">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    placeholder="Enter Duration"
                    name="duration"
                    value={this.state.duration}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label for="image">Image Anime</label>
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

export default Anime;
