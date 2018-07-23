import React from "react";
import resume from "../../data.json";
export const Portfolio = props => {
  let { personalInformation, workExperience, works } = resume;
  return (
    <div>
      <h2>Portfolio Items</h2>
      {works.map(item => <div>{item.site}</div>)}
    </div>
  );
};
