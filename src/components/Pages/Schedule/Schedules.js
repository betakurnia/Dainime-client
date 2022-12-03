import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../../../actions/animeActions';
import Schedule from './Schedule';
import SchedulePlaceHolder from '../../Common/SchedulePlaceHolder';
import Spinner from '../../Common/Spinner';
import PropTypes from 'prop-types';

class Schedules extends Component {
  componentDidMount() {
    this.props.getSchedule();

    document.title = 'Dainime | Jadwal anime di Dainime';
  }

  render() {
    const { schedule } = this.props.anime;

    const loading = this.props.anime.loading;

    return (
      <div>
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
      </div>
    );
  }
}

Schedules.propTypes = {
  anime: PropTypes.object.isRequired,
  getSchedule: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
});

export default connect(mapStateToProps, { getSchedule })(Schedules);
