import React from 'react';

import { Link } from 'react-router-dom';

const Title = (props) => {
  const { title } = props;

  return (
    <div className="mt-2">
      <Link
        to={`/${title
          .toLowerCase()
          .split(' ')
          .join('-')}`}
      >
        <a
          href="/#"
          className="text-light-black utility_text-decoration_underline"
        >
          <h3 className="mb-0 h5 utility_text_16px text-uppercase">{title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default Title;
