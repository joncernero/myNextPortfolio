import styled from 'styled-components';
import Space from '../../public/assets/pexels-frank-cone-3214110.jpg';

import React from 'react';

function PicOne() {
  return <Section image={Space}></Section>;
}

export default PicOne;

export const Section = styled.div`
  min-height: 40vh;
  background: url(${(props) => props.image.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
