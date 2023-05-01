import React from 'react';
import Navbar from './components/navbar';

import styled from "styled-components"
import ImageMasonry from './components/helper/monsory';

export const Container = styled.div`
  margin: 32px 99px;
`
const images: any = [
  {
    src: "https://images.pexels.com/photos/16237228/pexels-photo-16237228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    label: "hek"
  },
  {
    src:"https://images.unsplash.com/photo-1682005418978-d7ccb6595fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    label: "hek"
  },
  {
    src:"https://images.unsplash.com/photo-1681913781833-6bfe4a576997?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    label: "Chaina Town"
  },
  {
    src:"https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609938772793-GBKK33H813K5S0S1C4AY/5.jpg?format=750w",
    label: "Chaina Town"
  },
  {
    src:"https://images.unsplash.com/photo-1681913783442-e551ea742373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    label: "Chaina Town"
  },
  {
    src:"https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609939081376-VOEQ5FXHERI9ADPPWZAG/21.jpg?format=750w",
    label: "Chaina Town"
  },
  {
    src:"https://images.pexels.com/photos/12755777/pexels-photo-12755777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    label: "Chaina Town"
  },
  {
    src:"https://images.pexels.com/photos/5956834/pexels-photo-5956834.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    label: "Chaina Town"
  },
  {
    src:"https://images.pexels.com/photos/12215102/pexels-photo-12215102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    label: "Chaina Town"
  },
  {
    src:"https://images.pexels.com/photos/13989976/pexels-photo-13989976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    label: "Chaina Town"
  }
];

const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	images.push(
   {src: "https://unsplash.it/250/" + ih + "?image=" + imgId[i],
    label: `unsplah ${imgId}`
   }
    );
}

const  App: React.FC = () => {
  return (
       <Container>
          <Navbar/>
          <ImageMasonry images={images} />
       </Container>
  );
}

export default App;
