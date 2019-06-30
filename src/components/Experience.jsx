import React from 'react';

const Experience = props => (
    <div className="Experience">
        <div className="Experience-container">
            {
                props.data.map((exp, index) => (      
                <div className="Experience-item" key={`Exp-${index}`}>
                    <h3>{exp.company}</h3>
                    <h4>{exp.jobTitle}</h4>
                    <p> Feb 2019 - June 2019 </p>
                </div>
                ))
            }

        </div>
    </div>
);

export default Experience;