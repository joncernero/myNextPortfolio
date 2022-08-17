import React from 'react';
import styled from 'styled-components';
import SpacePic from '../../public/assets/pexels-frank-cone-3214110.jpg';
import theme from '../styles/defaultThemes';
import Title from './Title';
import Badge from '../../public/assets/eleven-fifty-academy-graduate.png';
import { Icons } from '../constants/icons';
import { motion } from 'framer-motion';
import { techAnimations } from './Animations';

const TechEd = () => {
  return (
    <Section id='tech'>
      <div
        className='icons'
        variants={techAnimations}
        initial='hidden'
        animate='show'>
        {Icons.map((icon, index) => (
          <p key={index}>{icon}</p>
        ))}
      </div>
    </Section>
  );
};

export default TechEd;

const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 40px;

  .icons {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 65vh;
    width: 75%;
    gap: 0.2rem 1rem;
  }
  svg {
    color: ${(props) => props.theme.colors.fontColor1};
    font-size: 20px;
    transition: 0.4s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.accent1};
      transform: scale(1.3);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    right: 20px;

    .icons {
      flex-wrap: none;
      height: auto;
      gap: 0.2rem 0.05rem;
    }
    svg {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1400px) {
    top: 100px;
  }

  @media screen and (min-width: 1401px) {
    top: 100px;
  }
`;
