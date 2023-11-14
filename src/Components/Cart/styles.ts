import styled from "styled-components";

export const CartContainer = styled.section`
  width: 100%;
  max-width: 486px;
  background-color: #0f52ba;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 30px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(110%, 0);
  transition: transform 0.3s ease-in-out;

  &.cart--active {
    transform: translate(0, 0);
  }
`;

export const CartTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 32px;
  color: #fff;
  padding: 0 50px;
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: auto;
  gap: 30px;
`;

export const CartResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const CartTotal = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: #fff;
`;

export const CartPrice = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: #fff;
`;

export const CartItem = styled.div`
  &:last-child {
    border-bottom: none;
  }
`;

export const FinishPurchase = styled.button`
  width: 100%;
  height: 97px;
  background-color: #000;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  padding: 20px;
  line-height: 15px;
  border: none;
  cursor: pointer;
`;
