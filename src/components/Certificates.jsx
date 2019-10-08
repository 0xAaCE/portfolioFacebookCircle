import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import H4Styled from '../styled/H4Styled';
import PStyled from '../styled/PStyled';

const Certificate = props => (
  <div className="Certificate">
    <H2Styled name="Certificates" />
    <div className="Certificate-container">
      {props.data.map((cer, index) => (
        <div className="Certificate-item" key={`Certificates-${index}`}>
          <H3Styled> {cer.name} </H3Styled>
          <H4Styled> {cer.institution} </H4Styled>
          <PStyled> {cer.date} </PStyled>
        </div>
      ))}
    </div>
  </div>
);

export default Certificate;
