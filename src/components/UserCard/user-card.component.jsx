import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users.ducks";
import { Creators as MapActions } from "../../store/ducks/map.ducks";

import { Container, Card } from "./user-card.styles";

const UserCard = ({
  id,
  name,
  blog,
  avatar,
  removeUser,
  latitude,
  longitude,
  showOnMap
}) => {
  return (
    <Container key={id}>
      <Card>
        <img src={avatar} alt={`${name} foto de perfil`} />
        <div>
          <p>
            <strong>{name}</strong>
          </p>
          <button>
            <a href={blog} target="_blank">
              Ver no Github
            </a>
          </button>
          <button onClick={() => showOnMap({ latitude, longitude })}>
            Ver no mapa
          </button>
        </div>
      </Card>
      <button onClick={() => removeUser(id)}>X</button>
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions, ...MapActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(UserCard);
