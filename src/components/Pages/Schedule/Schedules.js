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

    const schedules = [
      {
        date: 'Senin',
      },
      {
        date: 'Selasa',
      },
      {
        date: 'Rabu',
      },
      {
        date: 'Kamis',
      },
      {
        date: 'Jumat',
      },
      {
        date: 'Sabtu',
      },
      {
        date: 'Minggu',
      },
    ];

    return (
      <div>
        <div className="container">
          <div className="row">
            {schedules.map((anime) => (
              <ScheduleCard date={anime.date} schedule={schedule} />
            ))}
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
