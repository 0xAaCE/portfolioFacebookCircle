import React from 'react';

const Education = props => (
    <div className="Education">
        <div className="Education-container">
            {
                props.data.map((edu, index) => (
                    <div className="Education-item" key={`Edu-${index}`}>
                        <h3>{edu.degree}</h3>
                        <h4>{edu.institution}</h4>
                        <p>{edu.startDate} - {edu.endDate}</p>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Education;