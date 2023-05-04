import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/navbar';
import { Masonry as ImageMasonry }from './components/reusable';
import { LoaderSpinner } from './components/reusable/Button';
import { useAppDispatch, useAppSelector } from './store/common/store';
import { fetchImageList } from './store/thunks';
import { AppContainer, BodyLoaderWrapper } from './styles/global';

const  App: React.FC = () => {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchImageList())
  }, [])

  const state = useAppSelector(state => state.imageList)
  
  return (
       <AppContainer>
          <Navbar/>
          <BodyLoaderWrapper>
            {state.isLoading && <LoaderSpinner />}
          </BodyLoaderWrapper>
          <ImageMasonry images={state.images} />
          
       </AppContainer>
  );
}

export default App;
