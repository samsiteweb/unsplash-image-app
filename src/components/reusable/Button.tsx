import React from 'react'
import styled, { css } from "styled-components"

interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    dangerOutline?: boolean;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export const ButtonLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  animation: spin 1s ease-in-out infinite;
  z-index: 10;
`;


const buttonBaseStyles = css`
  color: white;
  background: #3DB46D;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 137px;
  height: 55px;
  ${(props: ButtonProps) =>
    props.disabled
      ? css`
          opacity: 0.5;
          pointer-events: none;
        `
      : css`
          &:hover {
            background-color: #2C8E58;
          }
          &:active {
            background-color: #276d47;
            box-shadow: none;
          }
        `}

  ${(props: ButtonProps) =>
    props.isLoading && `${ButtonLoader}`}
`;

// @media (max-width: 768px) {
//     height: 44px;
//   }

const ButtonBase = styled.button<ButtonProps>`
  ${buttonBaseStyles}
`;

export const PrimaryButton = styled(ButtonBase)`
  color: white;
  background: #3DB46D;
`;

export const BorderLessButton = styled(ButtonBase)`
  background: none;
  color: #BDBDBD;
`;

export const DangerOutlineButton = styled(ButtonBase)`
  color: #EB5757;
  background-color: transparent;
  border: 1px solid #EB5757;
  border-radius: 38px;

  &:hover {
    background-color: #EB5757;
    color: white;
  }
  &:active {
    background-color: #c82333;
    color: white;
    box-shadow: none;
  }
`;