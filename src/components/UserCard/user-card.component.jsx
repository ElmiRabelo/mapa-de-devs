import React from "react";

import { Container, Card } from "./user-card.styles";

const UserCard = ({ id, name, blog, avatar }) => {
  return (
    <Container id={id}>
      <Card>
        <img src={avatar} alt={`${name} foto de perfil`} />
        <div>
          <p>
            <strong>{name}</strong>
          </p>
          <a href={blog}>Github</a>
        </div>
      </Card>
      <button>X</button>
    </Container>
  );
};

export default UserCard;
