import React, { Fragment } from "react";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../store/ducks/users.ducks";
import { Creators as MapActions } from "../store/ducks/map.ducks";

//ReactMapGL - Responsavel por renderizar o mapa do uber api
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

//Custom components
import UserInput from "../components/UserInput/user-input.component";
import UsersList from "../components/UsersList/users-list.component";

class MapPage extends React.Component {
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
    this.props.mapClick({ latitude, longitude });
  };

  _resize = () => {
    this.props.resizeRequest();
  };

  render() {
    const { map, users } = this.props;
    return (
      <Fragment>
        <UserInput />
        <UsersList />
        <ReactMapGL
          {...map.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZ29sZGVubWsiLCJhIjoiY2sxZ3dybml2MDF3aDNvb2hodnZyMXpuNCJ9.qVHNOUg7tzAZhdH8yZdHOg"
          }
          onViewportChange={viewport => this.props.onViewportChange(viewport)}
        >
          {users.data.map(user => (
            <Marker
              latitude={user.latitude}
              longitude={user.longitude}
              captureClick={true}
              key={user.id}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src={user.avatar_url}
              />
            </Marker>
          ))}
        </ReactMapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  map: state.map
});

const mapDispacthTopProps = dispatch =>
  bindActionCreators({ ...UsersActions, ...MapActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispacthTopProps
)(MapPage);
