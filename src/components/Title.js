import React from 'react';
import styled from 'styled-components';

// function Title({ value }) {
//   return (
//     <Div>
//       <h1>{value}</h1>
//     </Div>
//   );
// }

const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.fontColor1};
  font-weight: 100;
  font-family: ${(props) => props.theme.fonts.title};
  transform: rotate(90deg);

  @media screen and (min-width: 280px) and (max-width: 760px) {
    transform: rotate(360deg);
    font-size: 1.5rem;
  }
`;

export default Title;
