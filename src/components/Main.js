import React, { useState, useEffect } from "react";
import { Template, PageContainer } from "./../components/MainComponents";
import Headers from "./../components/partials/Headers";
import Routes from "./../Routes";

function Main() {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [loadFirst, setLoadFirst] = useState(true);

  useEffect(() => {
    if (loadFirst === false) {
      setVisibleHeader(visibleHeader);
      setVisibleHeaderOutside(visibleHeader);
    }
    setLoadFirst(true);
  }, [visibleHeader]);

  const setVisibleHeaderOutside = (visible) => {
    setVisibleHeader(visible);

    return visibleHeader;
  };

  return (
    <Template>
      <Headers
        visibleHeader={visibleHeader}
        setVisibleHeaderOutside={setVisibleHeaderOutside}
      />

      <PageContainer>
        <div
          className="menuMobile"
          onClick={() => {
            setVisibleHeader(true);
          }}
        >
          <div className="menuMobile__line"></div>
          <div className="menuMobile__line"></div>
          <div className="menuMobile__line"></div>
        </div>
        <Routes />
      </PageContainer>
    </Template>
  );
}

export default Main;
