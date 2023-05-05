import { useRef, useState, useEffect } from 'react';
import { DangerButton, PlainButton, Spinner } from '../reusable/Button';
import { ButtonWrapper, ModalMessage, ModalTitle } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/common/store';
import { useSelector } from 'react-redux';
import { getSelectedImage } from '../../redux/slices/imageList/imageListSelectors';
import { CustomInput, CustomModal as Modal } from '../reusable';
import { deleteImage } from '../../redux/slices/imageList/imageListThunks';

interface DeleteImageData {
  id: string;
  password: string;
}

export const DeleteImageModal: React.FC<any> = ({ isOpen, handleCloseModal }) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.imageList.isLoading);

  const selectedImage:any = useSelector(getSelectedImage);

  const handleDeleteImage = async () => {
    const password = passwordRef.current?.value?.trim();

    if (!password) {
      setIsError(true);
      setMessage('Please enter a password.');
      return;
    }

    if (password.length < 6) {
      setIsError(true);
      setMessage('Password must be at least six(6) characters long.');
      return;
    }

    const deleteImageData: DeleteImageData = {
      id: selectedImage ? selectedImage.id : '',
      password: passwordRef.current?.value ?? '',
    };
    setIsDeleting(true);
    try {
      setMessage('');
      setIsError(false);
      const response = await dispatch(deleteImage(deleteImageData));
      if (deleteImage.fulfilled.match(response)) {
        const payload = response.payload;
        if (payload.status === 'success') {
          handleCloseModal();
          setMessage('');
        } else if (payload.status === 'error') {
          setMessage(payload.message ?? "Eror deleting image");
          setIsError(true);
        }
      }
    } catch (error) {
      setIsError(true);
      setMessage('Error deleting image.');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (!isLoading && isDeleting && isError) {
      handleCloseModal();
      setIsDeleting(false);
    }
  }, [isLoading, handleCloseModal, isDeleting, isError]);

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
