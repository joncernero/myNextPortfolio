import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import App from '../components/App';
import Theme from '../styles/themeManager';
import Home from '../components/Home';
import SocialLinks from '../components/SocialLinks';
import About from '../components/About';
import Projects from '../components/Projects';
import TechEd from '../components/TechEd';
import PicOne from '../components/PicOne';
import PicTwo from '../components/PicTwo';

const Index = ({ Component, pageProps }) => {
  return (
    <Theme>
      <App>
        <Head>
          <title>j.cernero</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <>
          <Home />
          <Projects />
          <PicOne />
        </>
      </App>
    </Theme>
  );
};

export default Index;