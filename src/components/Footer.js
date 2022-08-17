import React from 'react';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { useScroll } from './useScroll';
import { footerLogoAnimations, footerTextAnimations } from './Animations';
import { motion } from 'framer-motion';

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Section>
      <motion.div
        className='logo_div'
        ref={element}
        initial='hidden'
        animate={controls}
        variants={footerLogoAnimations}
        transition={{
          delay: 0.02,
          type: 'tween',
          duration: 0.5,
        }}>
        <div className='logo_initials'>
          <p>jc</p>
        </div>
        <h1>j.cernero</h1>
      </motion.div>
      <Socials
        ref={controls}
        initial='hidden'
        animate={controls}
        variants={footerTextAnimations}
        transition={{
          delay: 0.02,
          type: 'tween',
          duration: 0.8,
        }}>
        <a href='https://www.linkedin.com/in/joncernero8463'>
          <AiIcons.AiOutlineLinkedin />
        </a>
        <a href='https://github.com/joncernero'>
          <AiIcons.AiOutlineGithub />
        </a>
        <a href='mailto:cernero.jon@gmail.com'>
          <AiIcons.AiOutlineMail />
        </a>
      </Socials>
    </Section>
  );
}

export default Footer;

const Section = styled.footer`
  min-height: 10vh;
  background-color: black;
  padding: 2rem 7rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .logo_div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 15px;
      color: ${(props) => props.theme.colors.fontColor1};
      font-family: ${(props) => props.theme.fonts.title};
      letter-spacing: 0.5;
    }
  }

  .logo_initials {
    width: 25px;
    height: 25px;
    background-color: ${(props) => props.theme.colors.fontColor1};
    color: ${(props) => props.theme.colors.fontColor2};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 15px;
    font-weight: bolder;
  }

  @media screen and (min-width: 280px) and (max-width: 760px) {
    padding: 2rem 1rem;
  }
`;

export const Socials = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  /* height: auto; */
  gap: 1rem;
  z-index: 10;

  a {
    padding: 0 0.5rem;
    color: ${(props) => props.theme.colors.fontColor1};
    transition: 0.4s ease-in-out;
    z-index: 1;
    /* margin-bottom: 2rem; */
  }

  a:hover {
    color: ${(props) => props.theme.colors.accent1};
  }

  @media screen and (min-width: 280px) and (max-width: 760px) {
    a {
      font-size: 15px;
    }
  }
`;
