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
`;

export default Title;
