import React from "react";
import "./mywork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div className="mywork" id="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div key={work.w_no} className="mywork-card">
            <img src={work.w_img} alt={work.w_name} />
            <p>{work.w_description}</p>
            <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-btn">
              View Project- On Progress
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
