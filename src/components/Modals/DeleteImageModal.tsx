
import CustomInput  from '../helper/customInput';
import Modal from '../helper/modal';
import styled from 'styled-components';
import { BorderLessButton as CancelButton, PrimaryButton } from '../helper/button';
import { ButtonWrapper, DeleteImageButton, ModalTitle } from './styles';

export const DeleteImageModal: React.FC<any> = ({isOpen, handleCloseModal}) => {
    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <ModalTitle> Are you sure? </ModalTitle>
            <CustomInput width="552.33px" label='Password' placeholder='*******************' />
                <ButtonWrapper>
                    <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
                    <DeleteImageButton>Delete</DeleteImageButton>
                </ButtonWrapper>
        </Modal>
    )
}