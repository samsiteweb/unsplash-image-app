import React from 'react'
import styled, { css } from "styled-components"
//import { Button as button } from '@chakra-ui/react';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonBase = css`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 44px;
  }
`;

const PrimaryButton = styled.button<ButtonProps>`
  ${ButtonBase};
  color: white;
  background: #3DB46D;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 137px;
  height: 55px;
  ${(props) =>
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
`;

const DangerButton = styled.button<ButtonProps>`
  ${ButtonBase};
  color: white;
  background-color: #EB5757;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 137px;
  height: 55px;
  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
          pointer-events: none;
        `
      : css`
          &:hover {
            background-color: #c82333;
          }
          &:active {
            background-color: #c82333;
            box-shadow: none;
          }
        `}
`;

const Button: React.FC<ButtonProps> = ({
  primary,
  danger,
  disabled,
  children,
  onClick,
}) => {
  if (primary) {
    return (
      <PrimaryButton onClick={onClick} disabled={disabled}>
        {children}
      </PrimaryButton>
    );
  }
  if (danger) {
    return (
      <DangerButton onClick={onClick} disabled={disabled}>
        {children}
      </DangerButton>
    );
  }
  return (
    <PrimaryButton onClick={onClick} disabled={disabled}>
      {children}
    </PrimaryButton>
  );
};

export default Button;