
import { useRef, useState } from 'react';
import { CustomModal as Modal, CustomInput } from '../reusable';
import { PlainButton, PrimaryButton as AddImageButton, Spinner } from '../reusable/Button';
import { ButtonWrapper, ModalMessage, ModalTitle } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/common/store';
import { addImage } from '../../store/thunks';

const AddImageModal: React.FC<any> = ({ isOpen, handleCloseModal }) => {

  const labelRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(state => state.imageList.isLoading)

  const handleAddImage = () => {
    const label = labelRef.current?.value?.trim();
    const url = urlRef.current?.value?.trim();

    if (!label || !url) {
      setIsError(true);
      setMessage('Please enter a label and photo url.');
      return;
    }

    const newImageData = {
      label: labelRef.current?.value ?? '',
      image_url: urlRef.current?.value ?? '',
    };
    dispatch(addImage(newImageData));
  };

 const handleClose = () => { 
        setIsError(false);
        setMessage('');  
  }



  return (
    <Modal height='367.2px' isOpen={isOpen} onClose={handleCloseModal}>
      <ModalTitle> Add a new photo </ModalTitle>
      <ModalMessage isError={isError}>{message}</ModalMessage>
      <CustomInput ref={labelRef} width="100%" label="Label" placeholder="Suspendisse elit massa" />
      <CustomInput ref={urlRef} width="100%" label="Photo Url" placeholder="Suspendisse elit massa" />
      <ButtonWrapper>
        <PlainButton onClick={() => {handleCloseModal(); handleClose()}}>Cancel</PlainButton>
        <AddImageButton  disabled={isLoading} onClick={handleAddImage}> { isLoading ? <Spinner/>  : "Add image" } </AddImageButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default AddImageModal;