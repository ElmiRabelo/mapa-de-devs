import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users.ducks";

import { Container, Card, Button } from "./user-input.styles";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleGetRequest = () => {
    this.props.getUserRequest(this.state.username);
    this.setState({ username: "" });
    this.props.hideInput();
  };

  render() {
    const { users, hideInput } = this.props;
    return (
      <Container displayInput={users.displayInput}>
        <Card>
          <p>Adicionar novo usuário</p>
          <input
            type="text"
            value={this.state.username}
            placeholder="Usuário no Github"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <div>
            <Button onClick={() => hideInput()}>Cancelar</Button>
            <Button primary onClick={this.handleGetRequest}>
              Adicionar
            </Button>
          </div>
        </Card>
      </Container>
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
)(UserInput);
