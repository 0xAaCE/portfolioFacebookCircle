import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-family: 'Robot';
  font-weight: 600;
  letter-spacing: 0.8px;
  margin: 0.5em 0 0 0;
  color: #467a99;
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>;
export default H3Styled;
