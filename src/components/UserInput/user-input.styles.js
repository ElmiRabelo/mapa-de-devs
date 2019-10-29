import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.displayInput ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 350px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
  small {
    font-size: 16px;
    color: #c01d1d;
    margin-top: 15px;
  }

  input {
    padding: 15px;
    background: #fff;
    margin: 15px 0;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #ccc;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      width: 49%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  padding: 10px 15px;
  font-size: 18px;
  background-color: ${props => (props.primary ? "#00AC25" : "#ABABAB")};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
