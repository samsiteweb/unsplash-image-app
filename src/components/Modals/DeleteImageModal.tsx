
import { useRef, useState  } from 'react';
import { DangerButton, PlainButton } from '../reusable/Button';
import { ButtonWrapper, ModalMessage, ModalTitle } from './styles';
import { deleteImage } from '../../store/features/imageSlice';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { getSelectedImage } from '../../store/selectors/imageSlice';
import {CustomInput, CustomModal as Modal } from '../reusable';

const DeleteImageModal: React.FC<any> = ({isOpen, handleCloseModal}) => {

    const passwordRef = useRef<HTMLInputElement>(null);

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const dispatch = useAppDispatch();

    const selectedImage: any = useSelector(getSelectedImage);

    const handleDeleteImage = () => {
        const password = passwordRef.current?.value?.trim();

        if (!password) {
            setIsError(true);
            setMessage('Please enter a password.');
            return;
          }

          if (password.length < 6) {
            setIsError(true);
            setMessage('Please is at least six(6) characters long.');
            return;
          }

        const deleteImageData = {
            id: selectedImage ? selectedImage?.id : "",
            password: passwordRef.current?.value ?? ""
        }
        dispatch(deleteImage(deleteImageData));
      };
    

      const handleClose = () => { 
        setIsError(false);
        setMessage('');  
        }

    return (
        <Modal height="276.12px" isOpen={isOpen} onClose={handleCloseModal}>
            <ModalTitle> Are you sure? </ModalTitle>
            <ModalMessage isError={isError}>{message}</ModalMessage>
            <CustomInput width="552.33px" ref={passwordRef} label='Password' placeholder='*******************' />
                <ButtonWrapper>
                    <PlainButton onClick={() => {handleCloseModal(); handleClose()}}>Cancel</PlainButton>
                    <DangerButton onClick={handleDeleteImage} >Delete</DangerButton>
                </ButtonWrapper>
        </Modal>
    )
}

export default DeleteImageModal;