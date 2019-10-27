import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users.ducks";

import { Container, Card } from "./user-card.styles";

const UserCard = ({ id, name, blog, avatar, removeUser }) => {
  return (
    <Container key={id}>
      <Card>
        <img src={avatar} alt={`${name} foto de perfil`} />
        <div>
          <p>
            <strong>{name}</strong>
          </p>
          <a href={blog}>Github</a>
        </div>
      </Card>
      <button onClick={() => removeUser(id)}>X</button>
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(UserCard);
