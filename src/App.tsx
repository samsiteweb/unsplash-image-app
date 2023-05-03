import React, { useEffect } from 'react';
import Navbar from './components/navbar';

import styled from "styled-components"
import ImageMasonry from './components/helper/monsory';
import { useAppDispatch, useAppSelector } from './store/store';
import { fetchImageList } from './store/features/imageSlice';

export const Container = styled.div`
  margin: 32px 99px;
`

// const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
// for(let i = 0; i< imgId.length; i++){
// 	const ih = 200 + Math.floor(Math.random()*10)*15;
// 	images.push(
//    {image_url: "https://unsplash.it/250/" + ih + "?image=" + imgId[i],
//     label: `unsplah ${imgId}`
//    }
//     );
// }

const  App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImageList())
  }, [])
  
  const storeImages = useAppSelector(state => state.imageList.images)

  return (
       <Container>
          <Navbar/>
          <ImageMasonry images={storeImages} />
       </Container>
  );
}

export default App;
