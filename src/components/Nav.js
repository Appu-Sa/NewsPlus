import React from "react";
const Nav = ({ setCat, setCountry }) => {
  const handleCategoryClick = (category) => {
    setCat(category);
  };

  const hanleCountryClick = (country) => {
    setCountry(country);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Categories
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => handleCategoryClick("technology")}
                  style={{ cursor: "pointer" }}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => handleCategoryClick("business")}
                  style={{ cursor: "pointer" }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => handleCategoryClick("entertainment")}
                  style={{ cursor: "pointer" }}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item cursor-pointer">
                <div
                  className="nav-link"
                  onClick={() => handleCategoryClick("health")}
                  style={{ cursor: "pointer" }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => handleCategoryClick("science")}
                  style={{ cursor: "pointer" }}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => handleCategoryClick("sports")}
                  style={{ cursor: "pointer" }}
                >
                  Sports
                </div>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contries
              </button>
              <ul className="dropdown-menu">
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => hanleCountryClick("us")}
                    style={{ cursor: "pointer" }}
                  >
                    US
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => hanleCountryClick("in")}
                    style={{ cursor: "pointer" }}
                  >
                    India
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => hanleCountryClick("jp")}
                    style={{ cursor: "pointer" }}
                  >
                    Japan
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => hanleCountryClick("kr")}
                    style={{ cursor: "pointer" }}
                  >
                    South Korea
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => hanleCountryClick("au")}
                    style={{ cursor: "pointer" }}
                  >
                    Australia
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={() => hanleCountryClick("cn")}
                    style={{ cursor: "pointer" }}
                  >
                    China
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          className="navbar-brand"
          href="/#"
          onClick={() => handleCategoryClick("general")}
        >
          <span className="badge  bg-light text-dark fs-5">
            News<span className="badge bg-danger">Plus</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
