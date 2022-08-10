import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Avatar from './Avatar';
import * as SiIcons from 'react-icons/si';
import { ProjectData } from '../constants/projectData';
import theme from '../styles/defaultThemes';

const Projects = () => {
  const IconMap = {
    JavaScript: <SiIcons.SiJavascript />,
    TypeScipt: <SiIcons.SiTypescript />,
    React: <SiIcons.SiReact />,
    PostgreSQL: <SiIcons.SiPostgresql />,
    NodeJS: <SiIcons.SiNodedotjs />,
    Express: <SiIcons.SiExpress />,
    StyledComponents: <SiIcons.SiStyledcomponents />,
  };

  return (
    <Container id='projects'>
      <div className='top_div'>
        <Title style={{ color: theme.colors.fontColor1 }}>Projects</Title>
      </div>
      <section>
        <div className='content_div'>
          {ProjectData.map((project, index) => {
            return (
              <Card key={index}>
                <a href={project.link}>
                  <div className='card_title_div'>
                    <h3 id='project_title'>{project.title}</h3>
                    <div className='icon_div'>
                      {project.stack.map((tech, index) => {
                        return IconMap[tech];
                      })}
                    </div>
                  </div>
                  <p id='project_description'>{project.description}</p>
                  <div className='password_div'>
                    <p>{project.username}</p>
                    <p>{project.password}</p>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  overflow: hidden;
  min-height: 30vh;
  background: linear-gradient(
    125deg,
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent5},
    ${(props) => props.theme.colors.accent2}
  );
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  section {
    overflow-x: hidden;
    overflow-x: scroll;
    z-index: 1;
    padding: 5px;
  }

  .top_div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 15%;
    margin: 0 5px 0 5px;
  }

  .content_div {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5px;
  }
`;

const Card = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  min-width: 350px;
  background-color: ${(props) => props.theme.colors.secondary2};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 3px solid white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 15px black;
    transform: scale(1.03);
    border-radius: 5px;
  }

  p {
    font-size: 15px;
  }

  .card_title_div {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 2px;
      padding: 0.2rem 0;
      font-size: 20px;
      color: ${(props) => props.theme.colors.accent5};
      letter-spacing: 1px;
    }
  }

  .icon_div {
    svg {
      margin: 0.4rem 0.2rem;
      font-size: 20px;
      color: ${(props) => props.theme.colors.fontColor2};
    }
  }

  .password_div {
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;
    color: ${(props) => props.theme.colors.fontColor2};

    p:nth-child(1) {
      margin-right: 1rem;
    }
  }
`;
