import React, { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
};

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden;
`;

const ModalContainer = styled.div`
  position: fixed;
  font-family: 'Open Sans', sans-serif; 
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 32px;
  border-radius: 5px;
  z-index: 1000;
  border-radius: 12px;
  width: 620px;
`;


const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc, false);

    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
