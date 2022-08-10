import React from 'react';
import styled from 'styled-components';
import SpacePic from '../../public/assets/pexels-frank-cone-3214110.jpg';
import theme from '../styles/defaultThemes';
import Title from './Title';
import Badge from '../../public/assets/eleven-fifty-academy-graduate.png';
import { Icons } from '../constants/icons';

const techEd = () => {
  return (
    <Section id='tech'>
      <div className='icons'>
        {Icons.map((icon, index) => (
          <p key={index}>{icon}</p>
        ))}
      </div>
    </Section>
  );
};

export default techEd;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  right: 30px;

  .icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 75%;
    gap: 0.5rem 0;
  }
  svg {
    color: ${(props) => props.theme.colors.fontColor1};
    font-size: 15px;
    transition: 0.4s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.accent1};
      transform: scale(1.3);
    }
  }
`;

const MyBadge = styled.div`
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
  height: 100px;
  width: 75px;
  border-radius: 100px;
`;
