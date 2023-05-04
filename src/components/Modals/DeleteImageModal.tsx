import { useRef, useState, useEffect } from 'react';
import { DangerButton, PlainButton, Spinner } from '../reusable/Button';
import { ButtonWrapper, ModalMessage, ModalTitle } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/common/store';
import { useSelector } from 'react-redux';
import { getSelectedImage } from '../../store/selectors';
import { CustomInput, CustomModal as Modal } from '../reusable';
import { deleteImage } from '../../store/thunks';

export const DeleteImageModal: React.FC<any> = ({ isOpen, handleCloseModal }) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.imageList.isLoading);

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
      id: selectedImage ? selectedImage?.id : '',
      password: passwordRef.current?.value ?? '',
    };
    dispatch(deleteImage(deleteImageData));
    setIsDeleting(true)
  };

  useEffect(() => {
    if (!isLoading && isDeleting) {
      handleCloseModal();
      setIsDeleting(false)
    }
  }, [isLoading, handleCloseModal]);

  const handleClose = () => {
    setIsError(false);
    setMessage('');
    handleCloseModal();
  };

  return (
    <Modal height="276.12px" isOpen={isOpen} onClose={handleCloseModal}>
      <ModalTitle> Are you sure? </ModalTitle>
      <ModalMessage isError={isError}>{message}</ModalMessage>
      <CustomInput
        type="password"
        width="552.33px"
        ref={passwordRef}
        label="Password"
        placeholder="*******************"
      />
      <ButtonWrapper>
        <PlainButton onClick={handleClose}>Cancel</PlainButton>
        <DangerButton onClick={handleDeleteImage}>
          {isLoading ? <Spinner /> : 'delete'}
        </DangerButton>
      </ButtonWrapper>
    </Modal>
  );
};
