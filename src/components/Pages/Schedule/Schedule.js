import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Schedule(props) {
  const schedule = Array.from(props.schedule);

  const scheduled = schedule.map((schedule) => (
    <div key={schedule._id}>
      {moment(schedule.aired, 'ddd') === props.dateCheck && (
        <div className="col-lg-12">
          <Link
            to={`/${schedule.title
              .toLowerCase()
              .split(' ')
              .join('-')}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline anime-header__title_text_18px"
            >
              <h4>{schedule.title}</h4>
            </a>
          </Link>
        </div>
      )}
      <div className="mt-2"></div>
    </div>
  ));

  return (
    <>
      {' '}
      <div className="col-lg-12">
        <div className="card">
          <div className="utility_background_light-black text-white pagination-sm  ">
            <div className="card-header ">
              <h5>{props.date}</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="row">{scheduled}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
