import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-family: 'Robot';
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
  color: #6890cb;
`;

const PStyled = ({ children }) => <StyledP>{children}</StyledP>;
export default PStyled;
