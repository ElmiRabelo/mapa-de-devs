import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users.ducks";

import UserCard from "../UserCard/user-card.component";

import { Container } from "./users-list.styles";

const UserList = ({ users }) => {
  return (
    <Container>
      {users.data.map(user => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          blog={user.blog}
          avatar={user.avatar_url}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
