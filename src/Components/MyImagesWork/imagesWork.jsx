import { useState } from "react";
import mywork_data from "../../assets/imageswork_data";
import "./myimageswork.css";

const ImagesWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading">Images Designed using Adobe</h2>

      <div className="work-grid">
        {mywork_data.map((work) => (
          <div key={work.w_no} className="work-card">
            <div className="work-img-container" style={{ position: "relative" }}>
              <img src={work.w_img} alt={work.w_name} />
              {/* Magnifying glass icon */}
              <span
                className="icon-overlay"
                onClick={() => openLightbox(work.w_img)}
                style={{ cursor: "pointer" }}
              >
                🔍
              </span>
            </div>
            <div className="work-info">
              <h4 className="work-title">{work.w_name}</h4>
              <p className="work-description">{work.w_description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Full view" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default ImagesWork;
