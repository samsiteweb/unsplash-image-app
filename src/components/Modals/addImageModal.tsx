
import CustomInput  from '../helper/customInput';
import Modal from '../helper/modal';
import { BorderLessButton as CancelButton, PrimaryButton as AddImageButton } from '../helper/button';
import { ButtonWrapper, ModalTitle } from './styles';


export const AddImageModal: React.FC<any> = ({isOpen, handleCloseModal}) => {
    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <ModalTitle> Add a new photo </ModalTitle>
            <CustomInput width="552.33px" label='Label' placeholder='Suspendisse elit massa' />
            <CustomInput width="552.33px" label='Photo Url' placeholder='Suspendisse elit massa' />
                <ButtonWrapper>
                    <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
                    <AddImageButton>Add image</AddImageButton>
                </ButtonWrapper>
        </Modal>
    )
}