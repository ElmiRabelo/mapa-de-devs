import React, { Component, Fragment } from "react";

import MapPage from "./pages/map.page";

import { GlobalStyle } from "./styles/styles.global";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />

        <MapPage />
      </Fragment>
    );
  }
}

export default App;
