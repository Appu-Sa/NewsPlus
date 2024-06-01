import React, { useState, useEffect } from "react";
import Img1 from "../assest/pic1.jpg"; // Import your default image
import "./carousel.css";

const Carousel = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === articles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length]);

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {articles.map((article, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={article.urlToImage ? article.urlToImage : Img1} // Use article.urlToImage if available, otherwise use Img1
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ height: "500px", width: "300px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}>
                {article.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() =>
          setActiveIndex(
            activeIndex === 0 ? articles.length - 1 : activeIndex - 1
          )
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() =>
          setActiveIndex(
            activeIndex === articles.length - 1 ? 0 : activeIndex + 1
          )
        }
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
