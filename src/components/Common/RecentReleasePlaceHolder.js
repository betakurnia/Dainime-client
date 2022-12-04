import React from 'react';
import ContentLoader from 'react-content-loader';

function RecentReleasePlaceHolder() {
  return (
    <div className="d-none d-lg-block">
      <ContentLoader style={{ width: '100%', height: 1219 }}>
        <rect x="22" y="22" rx="3" ry="3" width="60" height="20" />

        <div style={{ paddingTop: 10 }}></div>
        <rect x="22" y="71" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="71" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="91" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="211" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="211" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="231" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="351" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="351" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="371" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="491" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="491" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="511" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="631" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="631" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="651" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="771" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="771" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="791" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="911" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="911" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="931" rx="3" ry="3" width="84" height="12" />

        <rect x="22" y="1050" rx="3" ry="3" width="83" height="126" />
        <rect x="137" y="1050" rx="3" ry="3" width="168" height="12" />
        <rect x="137" y="1070" rx="3" ry="3" width="84" height="12" />
      </ContentLoader>
    </div>
  );
}

export default RecentReleasePlaceHolder;
