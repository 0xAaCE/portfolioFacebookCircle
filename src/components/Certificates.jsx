import React from 'react';

const Certificate = props => (
    <div className="Certificate">
        <div className="Certificate-container">
            {
                props.data.map((cer, index) => (
                <div className="Certificate-item" key={`Certificates-${index}`}>
                    <h3> {cer.name} </h3>
                    <h4> {cer.institution} </h4>
                    <p> {cer.date} </p>
                </div>
                ))
            }
        </div>
    </div>
);

export default Certificate;