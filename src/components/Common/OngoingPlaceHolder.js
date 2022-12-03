import React from "react";
import ContentLoader from "react-content-loader";

function OngoingPlaceHolder() {
  return (
    <ContentLoader style={{ height: 650, width: "100%" }}>
      <rect x="22" y="22" rx="3" ry="3" width="186" height="20" />
      <rect x="22" y="82" rx="3" ry="3" width="200" height="12" />

      <rect x="22" y="109" rx="3" ry="3" width="100" height="12" />
      <rect x="22" y="136" rx="3" ry="3" width="200" height="12" />
      <rect x="22" y="163" rx="3" ry="3" width="100" height="12" />
      <rect x="22" y="190" rx="3" ry="3" width="200" height="12" />
      <rect x="22" y="217" rx="3" ry="3" width="100" height="12" />
      <rect x="22" y="244" rx="3" ry="3" width="200" height="12" />
      <rect x="22" y="271" rx="3" ry="3" width="100" height="12" />
      <rect x="22" y="298" rx="3" ry="3" width="200" height="12" />
      <rect x="22" y="325" rx="3" ry="3" width="100" height="12" />
      <rect x="22" y="352" rx="3" ry="3" width="200" height="12" />
      <rect x="22" y="379" rx="3" ry="3" width="100" height="12" />
    </ContentLoader>
  );
}

export default OngoingPlaceHolder;
