
import { useRef } from 'react';

import CustomInput  from '../helper/customInput';
import Modal from '../helper/modal';
import { BorderLessButton as CancelButton, PrimaryButton as AddImageButton } from '../helper/button';
import { ButtonWrapper, ModalTitle } from './styles';
import { useAppDispatch } from '../../store/store';
import { addImage, addImageToList } from '../../store/features/imageSlice';
import { useImageListLoadingStatus } from '../../store/selectors/imageSlice';

export const AddImageModal: React.FC<any> = ({ isOpen, handleCloseModal }) => {
  const imageData = {
    id: '1',
    created_at: '2015-10-10',
    updated_at: '2015-10-10',
  };

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
