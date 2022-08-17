import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import * as AiIcons from 'react-icons/ai';
import * as IonIcons from 'react-icons/io5';
import { motion } from 'framer-motion';
import { navAnimation } from './Animations';
import { useScroll } from './useScroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

function Header() {
  const [element, controls] = useScroll();

  return (
    <Container
      ref={element}
      initial='hidden'
      variants={navAnimation}
      transition={{ delay: 0.1, duration: 0.3 }}
      animate={controls}>
      <LogoDiv>
        <Link href='/'>
          <a>
            <div className='logo_div'>
              <div className='logo_initials'>
                <p>jc</p>
              </div>
              <h1>j.cernero</h1>
            </div>
          </a>
        </Link>
      </LogoDiv>
      <MidDiv>
        <SocialLinks />
      </MidDiv>
      {/* <LinkDiv>
        <div className='page_link_div'>
          <Link href='#about'>
            <a className='page_link_icon'>
              <AiIcons.AiOutlineUser />
            </a>
          </Link>
        </div>
      </LinkDiv> */}
    </Container>
  );
}

export default Header;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: (5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  align-content: center;

  @media screen and (min-width: 280px) and (max-width: 724px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;

const LogoDiv = styled.div`
  grid-area: 1 / 1 / 1 / 3;
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  /* align-content: center; */

  .logo_div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

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

  @media screen and (min-width: 280px) and (max-width: 724px) {
    margin-left: 0.05rem;

    .logo_div {
      margin: 0;
    }
  }
`;

export const MidDiv = styled.div`
  grid-area: 1 / 2 / span 1 / 2;
  display: flex;
  justify-content: start;

  @media screen and (min-width: 280px) and (max-width: 724px) {
    justify-content: center;
    margin-right: 0.8rem;
  }
`;

// export const LinkDiv = styled.div`
//   grid-area: 1 / 5 / 2 / 3;
//   display: flex;
//   flex-direction: row;
//   justify-content: end;
//   align-items: center;
//   margin-right: 3rem;
//   color: ${(props) => props.theme.colors.fontColor1};

//   .page_link_div {
//     display: flex;
//     justify-content: center;
//     transition: 0.4s ease-in-out;

//     a {
//       display: flex;
//       align-items: center;
//       text-decoration: none;
//     }

//     .page_link_icon {
//       svg {
//         color: ${(props) => props.theme.colors.fontColor1};
//         transition: 0.4s ease-in-out;
//         margin: 0 15px;

//         &:hover {
//           color: ${(props) => props.theme.colors.accent1};
//         }
//       }
//     }
//   }

//   .page_link_div:hover {
//     color: ${(props) => props.theme.colors.accent1};
//   }
// `;
