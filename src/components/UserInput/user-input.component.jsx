import React, { Component } from "react";

//React e Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users.ducks";
//styles
import { Container, Card, Button } from "./user-input.styles";

//Component responsavel por mostar o input e os botões para adicionar um novo user
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleGetRequest = () => {
    this.props.getUserRequest(this.state.username);
    setTimeout(() => console.log("ola"), 3000);
    this.setState({ username: "" });
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
              {users.loading ? "Carregando..." : "Adicionar"}
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
