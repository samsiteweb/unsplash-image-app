import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import { Masonry as ImageMasonry }from './components/reusable';
import { useAppDispatch, useAppSelector } from './store/common/store';
import { fetchImageList } from './store/thunks';

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
