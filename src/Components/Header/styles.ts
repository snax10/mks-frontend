import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0f52ba;
  width: 100%;
  height: 101px;
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;

    span {
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
    }
  }
`;
