import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { FaChevronUp } from 'react-icons/fa';

function SocialLinks() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  });

  return (
    <Socials>
      <a href='https://www.linkedin.com/in/joncernero8463'>
        <AiIcons.AiOutlineLinkedin />
      </a>
      <a href='https://github.com/joncernero'>
        <AiIcons.AiOutlineGithub />
      </a>
      <a href='mailto:cernero.jon@gmail.com'>
        <AiIcons.AiOutlineMail />
      </a>
      <HomeLink>
        <a href='#' className={`${visible ? 'block' : 'none '}`}>
          <FaChevronUp />
        </a>
      </HomeLink>
    </Socials>
  );
}

export default SocialLinks;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100vw;
  height: auto;
  gap: 1rem;
  z-index: 10;

  a {
    padding: 10px 0.5rem;
    color: ${(props) => props.theme.colors.fontColor1};
    transition: 0.4s ease-in-out;
    z-index: 1;
    /* margin-bottom: 2rem; */
  }

  a:hover {
    color: ${(props) => props.theme.colors.accent1};
    transform: scale(1.2);
  }
`;

const HomeLink = styled.div`
  max-width: 100vw;
  z-index: 100;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    left: 40px;
    background-color: ${(props) => props.theme.colors.fontColor1};
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: ${(props) => props.theme.colors.fontColor2};
      font-size: 1.3rem;
    }
  }
`;
