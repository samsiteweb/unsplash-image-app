import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import { Masonry as ImageMasonry } from './components/reusable';
import { LoaderSpinner } from './components/reusable/Button';
import { useAppDispatch, useAppSelector } from './store/common/store';
import { fetchImageList } from './store/thunks';
import { AppContainer, BodyLoaderWrapper } from './styles/global';

const App: React.FC = () => {

  const dispatch = useAppDispatch();

  const {images, isLoading} = useAppSelector(state => state.imageList)

  useEffect(() => {
    dispatch(fetchImageList())
  }, [])


  return (
    <AppContainer>
      <Navbar />
      <BodyLoaderWrapper>
        {isLoading && <LoaderSpinner />}
      </BodyLoaderWrapper>
      <ImageMasonry images={images} />

    </AppContainer>
  );
}

export default App;
