import React, { Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../store/ducks/users.ducks";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import UserInput from "../components/UserInput/user-input.component";

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
    this.props.showInput();
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
    const { displayInput } = this.props.users;
    return (
      <Fragment>
        <UserInput />
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

const mapStateToProps = state => ({
  users: state.users
});

const mapDispacthTopProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispacthTopProps
)(MapPage);
