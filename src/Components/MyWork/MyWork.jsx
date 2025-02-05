import React from "react";
import "./mywork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work) => (
          <img key={work.w_no} src={work.w_img} alt={work.w_name} />
        ))}
      </div>

    </div>
  );
};

export default MyWork;
