import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

type ModalProps = {
  isOpen: boolean;
  height: string;
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

const ModalContainer = styled.div<{height: string}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 32px;
  border-radius: 5px;
  z-index: 1000;
  border-radius: 12px;
  width: 620px;
  height: ${(props) => (props.height ? props.height : '367.2px')};
  @media only screen and (max-width: 768px) {
    width: 78%;
    height: 300px;
  }
`;


const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, height, children }) => {
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
      <ModalContainer height={height}>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CustomModal;
