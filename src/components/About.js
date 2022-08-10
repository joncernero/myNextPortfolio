import React from 'react';
import styled from 'styled-components';
import SpacePic from '../../public/assets/pexels-frank-cone-3214110.jpg';
import Me from '../../public/assets/MyPic.png';
import Badge from '../../public/assets/eleven-fifty-academy-graduate.png';
import Title from './Title';
import { Icons } from '../constants/icons';
import theme from '../styles/defaultThemes';

const About = () => {
  return (
    <Section id='about' image={SpacePic}>
      <div className='content_div'>
        <div className='left_content_div'>
          <Title style={{ color: theme.colors.secondary2 }}>About</Title>
          <div className='about_div'></div>
          <MyPic image={Me}></MyPic>
          <p>
            Husband and father of three. I&rsquo;ve lived a majority of my life
            just North of Indianapolis, Indiana with several long excursions in
            exotic places like the picture above. I enjoy playing guitars
            regularly. I watch too much film and TV. It&rsquo;s been sometime
            since I&rsquo;ve read an entire book but J.R. Tolkien is my favorite
            author. I&rsquo;m a big baseball fan and grew up frequenting Yankee
            Stadium - yes, I&rsquo;m still a Yankees fan!
            <br></br>
            <br></br>
            Professionally, I have no-shame in saying that I&rsquo;m a jack of
            all trades. My career experience includes non-profit, customer
            service, recruiting, sales, job-ad marketing, and construction
            experience. In late 2020, I was given the opportunity to attend
            Eleven-Fifty Academy and completed a part-time web developer
            program. The program provided me with understanding of languages
            HTML, CSS, JavaScript, TypeScript and PostgresQL. I also gained
            experience utilizing frameworks like React, Express, Sequelize, and
            Node.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;

const Section = styled.div`
  min-height: 40vh;
  /* background-image: url(${(props) => props.image.src}); */
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.accent1},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent2}
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px 40px 50px 40px;
  display: flex;
  align-items: center;

  .content_div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    /* gap: 2rem; */
  }

  .about_div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .left_content_div {
    display: flex;
    flex-direction: row;
    width: 50%;

    p {
      width: 100%;
      height: auto%;
      color: ${(props) => props.theme.colors.fontColor1};
      font-family: ${(props) => props.theme.fonts.title};
      font-size: 15px;
      word-wrap: wrap;
    }
  }
`;

const MyPic = styled.div`
  align-self: center;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  height: 200px;
  width: 150px;
  border-radius: 100px;
  border: 2px solid white;
`;
