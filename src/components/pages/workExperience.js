import React from "react";
import Resume from "../../data.json";
let { workExperience } = Resume;
export const WorkExperienceComponent = () => (
  <div>
    {workExperience.map((employeer, index) => (
      <div className="company" key={`employer_${index}`}>
        <div className="title">
          <b>{employeer.title}</b> - {employeer.duration}
        </div>
        <ul>
          {employeer.items.map(workItem => (
            <li className="work-item">{workItem.description}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
