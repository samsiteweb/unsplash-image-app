import React from 'react'
import styled, { css } from "styled-components"

interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    dangerOutline?: boolean;
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

export const PrimaryButton = styled.button<ButtonProps>`
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

export const BorderLessButton = styled.button<ButtonProps>`
${ButtonBase};
    background: none;
    width: 137px;
    color: #BDBDBD;
`

export const DangerOutlineButton = styled.button<ButtonProps>`
  ${ButtonBase};
    color: #EB5757;
    background-color: transparent;
    width: 63px;
    height: 23px;
    border: 1px solid #EB5757;
    border-radius: 38px;

  ${(props) =>
        props.disabled
            ? css`
          opacity: 0.5;
          pointer-events: none;
        `
            : css`
          &:hover {
            background-color: #EB5757;
            color: white;
          }
          &:active {
            background-color: #c82333;
            color: white;
            box-shadow: none;
          }
        `}
        @media (max-width: 768px) {
            height: 23px;
          }
`;

// const Button: React.FC<ButtonProps> = ({
//     primary,
//     dangerOutline,
//     disabled,
//     children,
//     onClick,
// }) => {
//     if (primary) {
//         return (
//             <PrimaryButton onClick={onClick} disabled={disabled}>
//                 {children}
//             </PrimaryButton>
//         );
//     }
//     if (dangerOutline) {
//         return (
//             <DangerOutlineButton onClick={onClick} disabled={disabled}>
//                 {children}
//             </DangerOutlineButton>
//         );
//     }
//     return (
//         <PrimaryButton onClick={onClick} disabled={disabled}>
//             {children}
//         </PrimaryButton>
//     );
// };

// export default Button;