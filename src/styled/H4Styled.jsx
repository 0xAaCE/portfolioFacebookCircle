import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  font-family: 'Robot';
  font-weight: 400;
  letter-spacing: 0.8px;
  margin: 0.5em 0 0 0;
  color: #6890cb;
`;

const H4Styled = ({ children }) => <StyledH4>{children}</StyledH4>;
export default H4Styled;
