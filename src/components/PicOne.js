import styled from 'styled-components';
import Water from '../../public/assets/pexels-josh-sorenson-258205-cropped.jpg';

import React from 'react';

function PicOne() {
  return <Section image={Water}></Section>;
}

export default PicOne;

export const Section = styled.div`
  min-height: 40vh;
  background: url(${(props) => props.image.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
