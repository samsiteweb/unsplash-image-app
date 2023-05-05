import { useRef, useState, useEffect } from 'react';
import { CustomModal as Modal, CustomInput } from '../reusable';
import { PlainButton, PrimaryButton as AddImageButton, Spinner } from '../reusable/Button';
import { ButtonWrapper, ModalMessage, ModalTitle } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/common/store';
import { addImage } from '../../redux/slices/imageList/imageListThunks';

export const AddImageModal: React.FC<any> = ({ isOpen, handleCloseModal }) => {

  const labelRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useAppDispatch();

  const isLoading: boolean = useAppSelector(state => state.imageList.isLoading)

  useEffect(() => {
    if (!isLoading && labelRef.current && urlRef.current) {
      labelRef.current.value = '';
      urlRef.current.value = ''
    }
  }, [isLoading])

  const handleAddImage = async () => {
    const label = labelRef.current?.value?.trim();
    const url = urlRef.current?.value?.trim();
    const password = passwordRef.current?.value?.trim();

    if (!label || !url) {
      setIsError(true);
      setMessage('Please enter a label, photo URL.');
      return;
    }

    const urlRegex = /^https?:\/\/(?:www\.)?[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-]$/;
      if (!url.match(urlRegex)) {
        setIsError(true);
        setMessage('The entered URL is not a valid image url');
        return;
      }

    setIsError(false);
    setMessage('');

    try {
      const newImageData = {
        label: label,
        image_url: url,
        password: password
      };
      const response =  await dispatch(addImage(newImageData)).unwrap();
      if (response.status === 'success') {
        setMessage('Image added successfully');
        setTimeout(() => setMessage(''), 2000);
      }
    } catch (error) {
      setIsError(true);
      setMessage('Unable to add image. Please try again later.');
    }
  };

  const handleModalClose = () => {
    setIsError(false);
    setMessage('');
    handleCloseModal();
  };

  return (
    <Modal height='367.2px' isOpen={isOpen} onClose={handleModalClose}>
      <ModalTitle> Add a new photo </ModalTitle>
      <ModalMessage isError={isError}>{message}</ModalMessage>
      <CustomInput ref={labelRef} width="100%" label="Label" placeholder="Tell a story" />
      <CustomInput ref={urlRef} width="100%" label="Photo Url" placeholder="Enter a valid photo url" />
      <ButtonWrapper>
        <PlainButton onClick={handleModalClose}>Cancel</PlainButton>
        <AddImageButton disabled={isLoading} onClick={handleAddImage}> { isLoading ? <Spinner/>  : "Add image" } </AddImageButton>
      </ButtonWrapper>
    </Modal>
  );
};
