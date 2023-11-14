import styled from "styled-components";

export const ProductCardContainer = styled.article`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1352);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

export const CardImage = styled.img`
  max-width: 217px;
  margin: 0 auto;
  object-fit: cover;
`;

export const CardInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const CardTitle = styled.h2`
  max-width: 124px;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.3;
  font-weight: 300;
`;

export const CardPrice = styled.p`
  width: 84px;
  height: 26px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background-color: #373737;
  text-align: center;
  padding: 5px 10px;
`;

export const CardDescription = styled.p`
  padding: 0 20px;
  font-size: 10px;
  color: #2c2c2c;
  font-family: "Montserrat", sans-serif;
  line-height: 12px;
  font-weight: 300;
  flex: 1;
`;

export const AddCartButton = styled.button`
  width: 100%;
  height: 41px;

  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  gap: 20px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 0 0 10px 10px;

  background-color: #0f52ba;
`;
