import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../../../actions/animeActions';
import ScheduleCard from './ScheduleCard';
import PropTypes from 'prop-types';

class Schedules extends Component {
  componentDidMount() {
    this.props.getSchedule();
  }

  render() {
    const { schedule } = this.props.anime;

    return (
      <div>
        <div className="container">
          <div className="row">
            <ScheduleCard date="Senin" schedule={schedule} />
            <ScheduleCard date="Selasa" schedule={schedule} />
            <ScheduleCard date="Rabu" schedule={schedule} />
            <ScheduleCard date="Kamis" schedule={schedule} />
            <ScheduleCard date="Jum'at" schedule={schedule} />
            <ScheduleCard date="Sabtu" schedule={schedule} />
            <ScheduleCard date="Minggu" schedule={schedule} />
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
