import React from 'react';
import Disqus from 'disqus-react';

function Comment(props) {
  const disqusShortname = 'dainimes';
  const disqusConfig = {
    url: `http://localhost:3000/${props.title}`, //this.props.pageUrl
    identifier: `${props.title}`, //this.props.uniqueId
    title: `${props.title}`, //this.props.title
  };

  return (
    <div>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}

export default Comment;
