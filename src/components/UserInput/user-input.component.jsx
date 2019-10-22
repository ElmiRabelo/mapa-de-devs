import React from "react";

import { Container, Card, Button } from "./user-input.styles";

const UserInput = ({ shouldDisplay }) => (
  <Container displayInput={shouldDisplay}>
    <Card>
      <p>Adicionar novo usuário</p>
      <input type="text" placeholder="Usuário no Github" />
      <div>
        <Button>Cancelar</Button>
        <Button primary>Adicionar</Button>
      </div>
    </Card>
  </Container>
);

export default UserInput;
