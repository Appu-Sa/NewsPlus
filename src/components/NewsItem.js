import React from "react";
import Img1 from "../assest/pic1.jpg";

const NewsItem = ({ src, title, desp, url,id }) => {
  return (
    <>
      <div
        key={id}
        className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ width: "385px" }}
      >
        <img
          src={src ? src : Img1}
          style={{ height: "150px", width: "365px" }}
          className="card-img-top"
          alt={Img1}
        />
        <div className="card-body text-center">
          {/* <h5 className="card-title">{title.slice(0,60)}</h5> */}
          <p className="card-text">
            {desp
              ? desp.slice(0, 80)
              : "For more information about this topic please klindly use the link below"}....
          </p>
        </div>
        <div className="card-body text-center">
          <a href={url} className="card-link">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
