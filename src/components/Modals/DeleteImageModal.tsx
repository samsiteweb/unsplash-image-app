
import CustomInput  from '../helper/customInput';
import Modal from '../helper/modal';
import { useRef } from 'react';
import { BorderLessButton as CancelButton, PrimaryButton } from '../helper/button';
import { ButtonWrapper, DeleteImageButton, ModalTitle } from './styles';
import { deleteImage } from '../../store/features/imageSlice';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { getSelectedImage } from '../../store/selectors/imageSlice';

export const DeleteImageModal: React.FC<any> = ({isOpen, handleCloseModal}) => {

    const passwordRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const selectedImage: any = useSelector(getSelectedImage);
    console.log(selectedImage, "logging here")

    const handleDeleteImage = () => {
        const id = selectedImage ? selectedImage?.id : "";
        const password = passwordRef.current?.value ?? "";
        dispatch(deleteImage({ id, password }));
      };
    

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <ModalTitle> Are you sure? </ModalTitle>
            <CustomInput width="552.33px" ref={passwordRef} label='password' placeholder='*******************' />
                <ButtonWrapper>
                    <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
                    <DeleteImageButton onClick={handleDeleteImage} >Delete</DeleteImageButton>
                </ButtonWrapper>
        </Modal>
    )
}