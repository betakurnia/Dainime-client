import React from 'react';
import ScheduleTitle from './ScheduleTitle';

function ScheduleCard(props) {
  const schedule = props.schedule;

  return (
    <>
      {' '}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
        <div className="card">
          <div className="card-header utility_background_light-black text-white">
            <h2 className="h5 mb-0">{props.date}</h2>
          </div>
          <div className="card-body">
            <div className="row">
              {schedule.map((schedule) => (
                <ScheduleTitle
                  key={schedule._id}
                  aired={schedule.aired}
                  title={schedule.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleCard;
