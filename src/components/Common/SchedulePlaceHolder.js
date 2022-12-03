import React from 'react';
import ContentLoader from 'react-content-loader';

function SchedulePlaceHolder() {
  return (
    <div className="d-none d-lg-block">
      <ContentLoader style={{ width: '100%', height: 250 }}>
        <rect x="22" y="22" rx="3" ry="3" width="60" height="20" />
        <rect x="22" y="76" rx="3" ry="3" width="169" height="12" />
        <rect x="22" y="96" rx="3" ry="3" width="100" height="12" />

        <rect x="285" y="22" rx="3" ry="3" width="60" height="20" />
        <rect x="285" y="76" rx="3" ry="3" width="169" height="12" />
        <rect x="285" y="96" rx="3" ry="3" width="100" height="12" />

        <rect x="570" y="22" rx="3" ry="3" width="60" height="20" />
        <rect x="570" y="76" rx="3" ry="3" width="169" height="12" />
        <rect x="570" y="96" rx="3" ry="3" width="100" height="12" />

        <rect x="856" y="22" rx="3" ry="3" width="60" height="20" />
        <rect x="856" y="76" rx="3" ry="3" width="169" height="12" />
        <rect x="856" y="96" rx="3" ry="3" width="100" height="12" />

        <rect x="22" y="165" rx="3" ry="3" width="60" height="20" />
        <rect x="22" y="219" rx="3" ry="3" width="169" height="12" />
        <rect x="22" y="239" rx="3" ry="3" width="100" height="12" />

        <rect x="285" y="165" rx="3" ry="3" width="60" height="20" />
        <rect x="285" y="219" rx="3" ry="3" width="169" height="12" />
        <rect x="285" y="239" rx="3" ry="3" width="100" height="12" />

        <rect x="570" y="165" rx="3" ry="3" width="60" height="20" />
        <rect x="570" y="219" rx="3" ry="3" width="169" height="12" />
        <rect x="570" y="239" rx="3" ry="3" width="100" height="12" />

        <rect x="856" y="165" rx="3" ry="3" width="60" height="20" />
        <rect x="856" y="219" rx="3" ry="3" width="169" height="12" />
        <rect x="856" y="239" rx="3" ry="3" width="100" height="12" />
      </ContentLoader>
    </div>
  );
}

export default SchedulePlaceHolder;
