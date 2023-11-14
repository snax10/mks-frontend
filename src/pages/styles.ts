import styled from "styled-components";

export const ProductsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  justify-content: center;

  padding: 120px 20px 50px;
  margin: 0 auto;
  max-width: 1200px;
`;
