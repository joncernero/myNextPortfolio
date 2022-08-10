import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const App = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default App;
