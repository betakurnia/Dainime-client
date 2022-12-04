import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ScheduleTitle = (props) => {
  const { dateCheck, title, aired } = props;

  return (
    <div className="mt-2">
      {moment(aired, 'ddd') === dateCheck && (
        <div className="col-lg-4">
          <Link
            to={`/${title
              .toLowerCase()
              .split(' ')
              .join('-')}`}
          >
            <a
              href="/#"
              className=" text-light-black utility_text-decoration_underline anime-header__title_text_18px"
            >
              <h4>{title}</h4>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ScheduleTitle;
