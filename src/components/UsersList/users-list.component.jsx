import React from "react";

//react e redux
import { connect } from "react-redux";

//custom components
import UserCard from "../UserCard/user-card.component";
//styles
import { Container } from "./users-list.styles";

//Component resposavel por fazer a listagem de users
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

export default connect(mapStateToProps)(UserList);
