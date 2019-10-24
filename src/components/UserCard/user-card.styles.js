import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #f4f4f4;
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

  a {
    text-decoration: none;
    color: #114afa;
  }
`;
