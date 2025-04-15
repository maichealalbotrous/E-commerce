import React, { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [Hide, setHide] = useState(false);

  const Display = () => {
    setHide(!Hide);
  };

  const PagesNav = [
    {
      MainLink: "Home",
      SubLink: ["Link1", "Link2", "Link3"],
    },
    {
      MainLink: "Mega Menu",
      SubLink: ["Link1", "Link2", "Link3"],
    },
    {
      MainLink: "Full Screen Menu",
      SubLink: ["Link1", "Link2", "Link3"],
    },
    {
      MainLink: "User Account",
      SubLink: ["Link1", "Link2", "Link3"],
    },
    {
      MainLink: "Admin Account",
      SubLink: ["Link1", "Link2", "Link3"],
    },
  ];

  return (
    <div className="TheBigContainar">
      <div className="container-fluid">
        <div className="Header_Nav">
          <div className="Plus_Show">
            <div className="Hot">
              <h4>Hot</h4>
              <span> Free Express shipping</span>
            </div>
            <div
              className="Show"
              onClick={() => {
                Display();
              }}
            >
              +
            </div>
          </div>
          <div className={`Soshial_logo  ${Hide === true ? "Display" : ""}`}>
            <div className="lang">
              <div class="dropdown">
                <button
                  style={{ color: "white" }}
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  language
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      EN
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Arabic
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Logo">
              <img
                style={{ maxWidth: "20px" }}
                className="facebook"
                src="/Icons/icons8-facebook-50.png"
              />
              <img
                style={{ maxWidth: "20px" }}
                className="facebook"
                src="/Icons/icons8-instagram-logo-50.png"
              />
              <img
                style={{ maxWidth: "20px" }}
                className="facebook"
                src="/Icons/icons8-twitter-48.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <div className="largPageNavBar">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">
              <img
                style={{ maxWidth: "30px" }}
                src="/Icons/icons8-shopping-cart-50.png"
              />
              <h2 style={{ color: "black" }}>E-Commerce</h2>
            </a>

            <form class=" d-flex" role="search">
              <span>
                <img
                  style={{ maxWidth: "30px" }}
                  src="/Icons/icons8-search-50.png"
                />
              </span>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All CateGories
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      EN
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Arabic
                    </button>
                  </li>
                </ul>
              </div>
            </form>

            <div className="AccountInfo">
              <img
                style={{ maxWidth: "30px" }}
                src="/Icons/icons8-user-50.png"
              />
              <img
                style={{ maxWidth: "30px" }}
                src="/Icons/icons8-shopping-cart-50.png"
              />
            </div>
          </div>
        </nav>

        {/*===================================================================================================*/}
        {/*===================================================================================================*/}

        <nav class="mt-4 navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand-brand " href="#">
              <div class="dropdownNav">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    style={{ maxWidth: "20px" }}
                    src="/Icons/icons8-delicious-48.png"
                  />
                  All CateGories
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      one
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      two
                    </button>
                  </li>
                </ul>
              </div>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul class=" ms-auto navbar-nav">
                {PagesNav.map((e) => (
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {e.MainLink}
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        {e.SubLink.map((e) => (
                          <a class="dropdown-item" href="#">
                            {e}
                          </a>
                        ))}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/*===================================================================================================*/}
      {/*===================================================================================================*/}

      <div className="SmallPageNavBar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img src="/Icons/icons8-grip-lines-50.png" />
              </span>
            </button>
            <a class="navbar-brand" href="#">
              <img
                style={{ maxWidth: "30px" }}
                src="/Icons/icons8-shopping-cart-50.png"
              />
              <h2 style={{ color: "black" }}>E-Commerce</h2>
            </a>

            <div className="Icone">
              <img
                style={{ maxWidth: "20px" }}
                src="/Icons/icons8-user-50.png"
              />
              <img
                style={{ maxWidth: "20px" }}
                src="/Icons/icons8-search-50.png"
              />
              <img
                style={{ maxWidth: "20px" }}
                src="/Icons/icons8-shopping-cart-50.png"
              />
            </div>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                {PagesNav.map((e) => (
                  <li style={{ textAlign: "center" }} class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {e.MainLink}
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        {e.SubLink.map((e) => (
                          <a class="dropdown-item" href="#">
                            {e}
                          </a>
                        ))}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
