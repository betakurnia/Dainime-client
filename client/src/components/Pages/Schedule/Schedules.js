import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { getSchedule } from "../../../actions/animeActions";

// Component
import Schedule from "./Schedule";
import SchedulePlaceHolder from "../../Common/SchedulePlaceHolder";
import Spinner from "../../Common/Spinner";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";

class Schedules extends Component {
  componentDidMount() {
    this.props.getSchedule();

    document.title = "Dainime | Jadwal anime di Dainime";
  }

  render() {
    const { schedule } = this.props.anime;

    const loading = this.props.anime.loading;

    const mobile = (
      <div className="container">
        <div className="row">
          <Schedule
            date="Senin"
            column="col-6"
            schedule={schedule}
            dateCheck="Mon"
          />
          <Schedule
            date="Selasa"
            column="col-6"
            schedule={schedule}
            dateCheck="Tue"
          />
        </div>
        <div className="mt-3"></div>
        <div className="row">
          <Schedule
            date="Rabu"
            column="col-6"
            schedule={schedule}
            dateCheck="Wed"
          />
          <Schedule
            date="Kamis"
            column="col-6"
            schedule={schedule}
            dateCheck="Thu"
          />
        </div>
        <div className="mt-3"></div>
        <div className="row">
          <Schedule
            date="Jum'at"
            column="col-6"
            schedule={schedule}
            dateCheck="Fri"
          />
          <Schedule
            date="Sabtu"
            column="col-6"
            schedule={schedule}
            dateCheck="Sat"
          />
        </div>
        <div className="mt-3"></div>
        <div className="row">
          <Schedule
            date="Minggu"
            column="col-6"
            schedule={schedule}
            dateCheck="Sun"
          />
        </div>
      </div>
    );

    const tablet = (
      <div className="container">
        <div className="row">
          <Schedule
            date="Senin"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Mon"
          />
          <Schedule
            date="Selasa"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Tue"
          />
          <Schedule
            date="Rabu"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Wed"
          />
        </div>
        <div className="mt-3"></div>
        <div className="row">
          <Schedule
            date="Kamis"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Thu"
          />
          <Schedule
            date="Jum'at"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Fri"
          />
          <Schedule
            date="Sabtu"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Sat"
          />
        </div>
        <div className="mt-3"></div>
        <div className="row">
          <Schedule
            date="Minggu"
            column="col-md-4"
            schedule={schedule}
            dateCheck="Sun"
          />
        </div>
      </div>
    );

    const desktop = (
      <div className="container">
        <div className="row">
          <Schedule
            date="Senin"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Mon"
          />
          <Schedule
            date="Selasa"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Tue"
          />
          <Schedule
            date="Rabu"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Wed"
          />
          <Schedule
            date="Kamis"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Thu"
          />
        </div>
        <div className="mt-3"></div>
        <div className="row">
          <Schedule
            date="Jum'at"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Fri"
          />
          <Schedule
            date="Sabtu"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Sat"
          />
          <Schedule
            date="Minggu"
            column="col-lg-3"
            schedule={schedule}
            dateCheck="Sun"
          />
        </div>
      </div>
    );

    const contentLoading = (
      <div className="container">
        <div className="row">
          <SchedulePlaceHolder />
        </div>
      </div>
    );
    return (
      <div>
        <BrowserView>
          {" "}
          <div className="d-none d-lg-block ">
            {loading ? contentLoading : desktop}
          </div>
          <div className="d-none d-md-block d-lg-none">
            {loading ? <Spinner /> : tablet}
          </div>
          <div className="d-none d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobile}
          </div>
          <div className="d-block d-sm-none ">
            {loading ? <Spinner /> : mobile}
          </div>
        </BrowserView>{" "}
        <TabletView>{loading ? <Spinner /> : tablet}</TabletView>{" "}
        <MobileView>
          {" "}
          <div className="d-none d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobile}
          </div>
          <div className="d-block d-sm-none ">
            {loading ? <Spinner /> : mobile}
          </div>
        </MobileView>
      </div>
    );
  }
}

Schedules.propTypes = {
  anime: PropTypes.object.isRequired,
  getSchedule: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime
});

export default connect(mapStateToProps, { getSchedule })(Schedules);
