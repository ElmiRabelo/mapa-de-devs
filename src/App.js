import React, { Fragment } from "react";

import MapPage from "./pages/map.page";

import { GlobalStyle } from "./styles/styles.global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MapPage />
    </Fragment>
  );
}

export default App;
