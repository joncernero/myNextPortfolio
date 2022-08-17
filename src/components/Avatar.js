import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInAnimation } from './Animations';
import { useScroll } from './useScroll';

const Me = () => {
  const [element, controls] = useScroll();
  return (
    <Avatar
      ref={element}
      initial='hidden'
      variant={fadeInAnimation}
      transition={{ delay: 0.5, duration: 0.1 }}
      animate={controls}>
      <Hair></Hair>
      <LeftEar></LeftEar>
      <RightEar></RightEar>
      <Head>
        <LeftEyeBrow />
        <RightEyeBrow />
        <LeftEye>
          <LeftInnerEye>
            <LeftPupil />
          </LeftInnerEye>
        </LeftEye>
        <RightEye>
          <RightInnerEye>
            <RightPupil />
          </RightInnerEye>
        </RightEye>
      </Head>
      <Beard>
        <MouthArea>
          <Mouth />
        </MouthArea>
      </Beard>
    </Avatar>
  );
};

export default Me;

const Blink = keyframes`
    90% {
        transform: none;
        animation-timing-function: ease-in;
    }
    93% {
        transform: translateY(5px) scaleY(0)
    }
    100% {
        animation-timing-function: ease-out;
    }
`;

export const Avatar = Styled(motion.div)`
  display: grid;
  width: 50px;
  height: 100px;
  height: 
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  'one one'
  'one one'
  'one one'
  'one one';
  padding-bottom: 50px;
  margin-bottom: 2rem;
`;

export const Hair = Styled.div`
  grid-area: one;
    background-color: #663300;
     -webkit-clip-path: polygon(82% 1%, 80% 17%, 99% 13%, 95% 35%, 86% 94%, 82% 32%, 15% 38%, 14% 95%, 3% 29%, 38% 5%);
    clip-path: polygon(82% 1%, 80% 17%, 99% 13%, 95% 35%, 86% 94%, 82% 32%, 15% 38%, 14% 90%, 3% 29%, 38% 5%);
    z-index: 77;
    width: 124px;
    height: 105px;
  margin-top: -12px;
`;

export const LeftEar = Styled.div`  
    grid-area: one;
    background-color: #ffd9b3;
   -webkit-clip-path: ellipse(25% 40%);
    clip-path: ellipse(25% 40%); 
    z-index: 45;
    width: 15px;
    height: 35px;
    justify-self: start;
    align-self: center;
    margin-top: 30px;
    margin-left: 5px;
`;

export const RightEar = Styled.div`
    grid-area: one;
    background-color: #ffd9b3;
    -webkit-clip-path: ellipse(25% 40%);
   clip-path: ellipse(25% 40%); 
    z-index: 45;
    width: 20px;
    height: 35px;
    justify-self: end;
    align-self: center;
    margin-top: 30px;
    margin-right: 4px;
`;

export const Head = Styled.div`
    grid-area: one;
   justify-self: center;
   align-self: end;
    background-color: #ffd9b3;
    width: 95px;
    height: 100px;
    border-radius: 50px;
    border-bottom: 25px solid #663300;
    border-top: 12px solid #663300;
    display: grid;
    grid-template-columns: (2, 1fr);
    grid-template-areas: 
    'one one';
    
`;

export const Beard = Styled.div`
grid-area: one;
justify-self: center;
align-self: end;
margin-bottom: -23px;
    background-color: #663300;
    width: 94px;
    height: 55px;
    border-radius: 0px 0 400px 400px;
    z-index: 50;
    display: flex;
    justify-content: center;

`;

export const MouthArea = Styled.div`
    width: 55%;
    background-color: #ffd9b3;
    z-index: 65;
    border-radius: 25px;
    border: 7px solid #663300;
    margin-top: -3px;
    display: flex;
    justify-content: center;
   
    
    
`;

export const Mouth = Styled.div`
  margin-left: 2px;
  -webkit-clip-path: polygon(35% 72%, 53% 71%, 65% 60%, 26% 62%);
  clip-path: polygon(35% 72%, 53% 71%, 65% 60%, 26% 62%);
  background-color: #000000;
  z-index: 75;
  height: 20px;
  width: 60px;
  

`;

export const LeftEyeBrow = Styled.div`
    grid-area: one;
    justify-self: start;
    align-self: center;
    margin-left: 10px;
    margin-top: 10px;
    -webkit-clip-path: polygon(51% 19%, 94% 19%, 91% 34%, 51% 31%, 0 39%, 0 33%);
    clip-path: polygon(51% 19%, 94% 19%, 91% 34%, 51% 31%, 0 39%, 0 33%);
    width: 30px;
    height: 25px; 
    background-color: #663300;
    z-index: 80;
  
  
`;

export const RightEyeBrow = Styled.div`
    grid-area: one;
    justify-self: end;
    align-self: center;
    margin-top: 10px;
    margin-right: 10px;
    -webkit-clip-path: polygon(0 33%, 0 39%, 51% 31%, 91% 34%, 94% 19%, 51% 19%);
    clip-path: polygon(0 33%, 0 39%, 51% 31%, 91% 34%, 94% 19%, 51% 19%);
    width: 30px;
    height: 25px; 
    background-color: #663300;
    z-index: 80;
    transform: rotateY(180deg);
    
`;
export const LeftEye = Styled.div`
    grid-area: one;
    justify-self: start;
    align-self: end;
    margin-bottom: -2px;
    margin-left: 12px;
    background-color: #FFFFFF;
    width: 30px;
    height: 45px;
    -webkit-clip-path: ellipse(38% 15%);
    clip-path: ellipse(38% 15%);
    z-index: 70;
    display: flex;
    justify-content: center;
    animation: ${Blink} 3.0s infinite;
`;

export const RightEye = Styled.div`
    grid-area: one;
    justify-self: end;
    align-self: end;
    margin-bottom: -2px;
    margin-right: 12px;
    background-color: #FFFFFF;
    width: 30px;
    height: 45px;
    -webkit-clip-path: ellipse(38% 15%);
    clip-path: ellipse(38% 15%);
    z-index: 70;
    display: flex;
    justify-content: center;
    animation: ${Blink} 3.0s infinite;
   
`;

export const LeftInnerEye = Styled.div`
    background-color: #009933;
    width: 30px;
    height: 45px;
    -webkit-clip-path: circle(16%);
    clip-path: circle(16%);
    z-index: 75;
    position: absolute;
    display: flex;
    justify-content: center;
    `;

export const RightInnerEye = Styled.div`
    background-color: #009933;
    width: 30px;
    height: 45px;
    -webkit-clip-path: circle(16%);
    clip-path: circle(16%);
    z-index: 75;
    position: absolute;
    display: flex;
    justify-content: center;
    
`;

export const LeftPupil = Styled.div`
    position: absolute;
    background-color: #000000;
    -webkit-clip-path: circle(10%);
    clip-path: circle(10%);
    z-index: 100;
    width: 20px;
    height: 35px; 
    top: 5px;
`;

export const RightPupil = Styled.div`
    position: absolute;
    background-color: #000000;
    -webkit-clip-path: circle(10%);
    clip-path: circle(10%);
    z-index: 100;
    width: 20px;
    height: 35px; 
    top: 5px;
`;
