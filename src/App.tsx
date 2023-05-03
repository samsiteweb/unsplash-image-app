import React, { useEffect } from 'react';
import Navbar from './components/navbar';

import styled from "styled-components"
import { Masonry as ImageMasonry }from './components/reusable';
import { useAppDispatch, useAppSelector } from './store/store';
import { fetchImageList } from './store/features/imageSlice';

const  App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImageList())
  }, [])

  const storeImages = useAppSelector(state => state.imageList.images)

  return (
       <>
          <Navbar/>
          <ImageMasonry images={storeImages} />
       </>
  );
}

export default App;
