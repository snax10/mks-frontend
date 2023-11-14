import styled from "styled-components";
import { IconClose } from "../../Icons/IconClose";

export const CartItemContainer = styled.section`
  width: 379px;
  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 8px;

  position: relative;
  gap: 20px;
  padding: 20px;
  box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.05);
`;

export const CartItemImage = styled.img`
  width: 46px;
  height: 57px;
`;

export const CartItemName = styled.div`
  width: 113px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  font-family: "Montserrat", sans-serif;
  color: #2c2c2c;
`;

export const QuantityButton = styled.button`
  border: none;
  width: 100%;
  text-align: center;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 8px;
  line-height: 24px;
  color: #000;
  cursor: pointer;
`;

export const CartButtonsContainer = styled.div`
  width: 60px;
  height: 23px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bfbfbf;
`;

export const QuantityCounter = styled.div`
  font-size: 8px;
  padding: 0 5px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  line-height: 9.7px;
  color: #000;
`;

export const CartItemPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  line-height: 17px;
  color: #000;
`;

export const RemoveItemButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: larger;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;

export const IconCloseCart = styled(IconClose)`
  position: relative;
  top: 0;
  right: 0;
`;
