
import { useRef } from 'react';
import { CustomModal as Modal, CustomInput } from '../reusable';
import { BorderLessButton as CancelButton, PrimaryButton as AddImageButton } from '../reusable/Button';
import { ButtonWrapper, ModalTitle } from './styles';
import { useAppDispatch } from '../../store/store';
import { addImage } from '../../store/features/imageSlice';
import { useImageListLoadingStatus } from '../../store/selectors/imageSlice';

const AddImageModal: React.FC<any> = ({ isOpen, handleCloseModal }) => {

  const labelRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const isLoading = useImageListLoadingStatus();

  const handleAddImage = () => {
    const newImageData = {
      label: labelRef.current?.value ?? '',
      image_url: urlRef.current?.value ?? '',
    };
    dispatch(addImage(newImageData));
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalTitle> Add a new photo </ModalTitle>
      <CustomInput ref={labelRef} width="100%" label="Label" placeholder="Suspendisse elit massa" />
      <CustomInput ref={urlRef} width="100%" label="Photo Url" placeholder="Suspendisse elit massa" />
      <ButtonWrapper>
        <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
        <AddImageButton isLoading={isLoading} disabled={isLoading} onClick={handleAddImage}>Add image</AddImageButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default AddImageModal;