import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderAnime extends Component {
  constructor(props) {
    super(props);
    this.shareLinkFB = this.shareLinkFB.bind(this);
  }

  shareLinkFB() {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
      'facebook-share-dialog',
      'width=800,height=600',
    );
  }

  render() {
    const episode = this.props.episode[0];

    return (
      <div>
        {' '}
        <div className="utility_background_white shadow-lg py-3 px-3">
          <div className="row">
            <div className="col-12">
              <div className="episode-header__title">
                <div className="row">
                  <div className="col-6">
                    <Link
                      to={`/${episode?.title
                        .toLowerCase()
                        .split(' ')
                        .join('-')}`}
                    >
                      <a href="/#" className="text-blue text-uppercase">
                        <h2 className="utility_text-decoration_underline h6 mb-0">
                          {episode?.title}
                        </h2>{' '}
                      </a>
                    </Link>
                  </div>
                  <div className="col-6">
                    <h3 className="text-light-black utility_text_18px text-right">
                      Episode - {episode?.episode}
                    </h3>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-lg-12">
              <h3 className="text-light-black utility_text_18px">Deskripsi</h3>
              <div className="mt-1"></div>
              <p>{episode?.anime?.synopsis}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-3">
              <div id="fb-share-button" onClick={this.shareLinkFB}>
                <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
                  <path
                    class="svg-icon-path"
                    d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z"
                  ></path>
                </svg>
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderAnime;
