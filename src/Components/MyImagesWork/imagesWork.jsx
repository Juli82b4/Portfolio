import React from "react";
import mywork_data from "../../assets/imageswork_data";
import "./myimageswork.css";
import project3_img from "../../assets/project_2.png";
import project4_img from "../../assets/new-pathway.jpg";

const ImagesWork = () => {
  return (
    <div className="myimages-container">
      <div className="myimages-heading">
        ADOBE XD - ADOBE ILLUSTRATOR - PHOTOSHOP
      </div>

      {/* Second row */}
      <div className="myimages-row2">
        <p className="myimages-p">Designed by Adobe XD</p>
        <img src={project3_img} alt="pic1" />
<p className="myimages-p"> Designed Combining Pictures using Adobe Illustrator & Photoshop</p>
        <img src={project4_img} alt="pic2" />
        
      </div>
      {/* First row */}
      <div className="myimages-row1">
        {mywork_data.slice(0, 2).map((work) => (
          <div key={work.w_no} className="myimages-card">
            <img src={work.w_img} alt={work.w_name} />
            <p className="myimages-p">{work.w_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesWork;
