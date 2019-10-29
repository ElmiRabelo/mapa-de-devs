import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background: #f5f5fa;
  position: relative;
  & > button {
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 12px;
    background-color: transparent;
    color: #cf0921;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #aaa;
  padding: 0 10px;

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    display: inline-block;
    margin-right: 15px;
  }

  button,
  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      background: #666;
    }
  }

  button {
    background-color: #333;
    width: 100%;
    padding: 2px 0;
    margin: 2px 0;
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }
`;
