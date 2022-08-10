import React from 'react';
import styled from 'styled-components';
import BgPicOne from '../../public/assets/pexels-josh-sorenson-258205-cropped.jpg';
import Avatar from '../components/Avatar';
import Header from './Header';
import TechEd from './TechEd';
import Badge from '../../public/assets/eleven-fifty-academy-graduate.png';

function Home() {
  return (
    <Section id='Home' image={BgPicOne}>
      <Header />
      <Container>
        <Avatar />
        <h3>Welcome to</h3>
        <h1>My Portfolio</h1>{' '}
        <h6>
          Hey, I&rsquo;m Jonathan and thanks for checking out my portfolio.
          I&rsquo;m an Indiana based Junior Web Developer. I have a diverse, and
          growing, skill set and I&rsquo;m always looking for new projects and
          opportunities!
        </h6>
        <div className='bottom_div'>
          <a href='mailto:cernero.jon@gmail.com'>
            <button>Contact Me</button>
          </a>
          <a
            href='https://www.credly.com/badges/1d2b75a5-3d27-4d42-ae66-c3e88c883c06/public_url'
            alt='Credly.com'>
            <MyBadge image={Badge}></MyBadge>{' '}
          </a>
        </div>
        <TechEd />
      </Container>
    </Section>
  );
}

export default Home;

const Section = styled.section`
  color: ${(props) => props.theme.colors.fontColor1};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 65vh;
  padding-left: 5rem;
  line-height: 0.9;
  font-family: ${(props) => props.theme.fonts.title};

  h1 {
    font-size: 100px;
    margin: 0;
  }
  h3 {
    font-size: 40px;
    margin: 0;
    color: ${(props) => props.theme.colors.fontColor2};
  }
  h6 {
    margin-top: 25px;
    word-wrap: inherit;
    font-weight: normal;
    font-size: 20px;
    width: 30vw;
  }

  button {
    margin-top: 35px;
    width: 150px;
    background: linear-gradient(
      300deg,
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent2}
    );
    padding: 0.7rem 0.5rem;
    color: ${(props) => props.theme.colors.fontColor1};
    font-family: ${(props) => props.theme.fonts.title};
    border-radius: 5px;
    border: 0.5px solid white;
    font-size: 15px;
    text-transform: uppercase;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 5px gray;
      transform: scale(1.08);
      border-radius: 5px;
    }
  }

  .bottom_div {
    display: flex;
    width: 30vw;
    justify-content: start;
    gap: 1rem;
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
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
