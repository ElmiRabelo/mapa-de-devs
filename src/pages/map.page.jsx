import React, { Fragment } from "react";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

class MapPage extends React.Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5489,
      longitude: -46.6388,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat;

    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude,
        longitude
      }
    });
  };

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  };

  render() {
    return (
      <Fragment>
        <ReactMapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZ29sZGVubWsiLCJhIjoiY2sxZ3dybml2MDF3aDNvb2hodnZyMXpuNCJ9.qVHNOUg7tzAZhdH8yZdHOg"
          }
          onViewportChange={viewport => this.setState({ viewport })}
        ></ReactMapGL>
      </Fragment>
    );
  }
}

export default MapPage;
