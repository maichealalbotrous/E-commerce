import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="row RowContainar">
        <div className="carousel col-md-7 col-lg-8 col-sm-12">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/hero-images/banner-15.jpg"
                  className="d-block img-fluid w-100"
                  alt="Slide 1" // Added alt attribute for accessibility
                />
                <div className="Info">
                  <h4>LIFE STYLE COLLECTION</h4>
                  <h1>MEN</h1>
                  <h4>
                    SALE UP TO <span style={{ color: "red" }}>30% OFF</span>
                  </h4>
                  <p>GET FREE CHEPPING ON ORDER OVER 99%</p>
                  <button type="button" className="btn btn-dark">
                    Buy
                  </button>
                </div>
              </div>
              <div className="carousel-item"> {/* Removed active class from here */}
                <img
                  src="/hero-images/banner-25.jpg"
                  className="d-block img-fluid w-100"
                  alt="Slide 2" // Added alt attribute for accessibility
                />
                <div className="Info">
                  <h4>LIFE STYLE COLLECTION</h4>
                  <h1>MEN</h1>
                  <h4>
                    SALE UP TO <span style={{ color: "red" }}>30% OFF</span>
                  </h4>
                  <p>GET FREE CHEPPING ON ORDER OVER 99%</p>
                  <button type="button" className="btn btn-dark">
                    ShopNow
                  </button>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12 Offers">
          <div className="FirstOffer">
            <img src="/hero-images/banner-16.jpg" alt="Offer 1" /> {/* Added alt attribute for accessibility */}
            <div className="OfferInfo">
              <p>New Arrivals</p>
              <h2>Summer</h2>
              <h2>Salles 20% Off</h2>
              <a>
                <button type="button" className="btn btn-dark">
                  Shop Now
                </button>
              </a>
            </div>
          </div>
          <div className="FirstOffer">
            <img src="/hero-images/banner-17.jpg" alt="Offer 2" /> {/* Added alt attribute for accessibility */}
            <div className="OfferInfo">
              <p>Gaming 4K</p>
              <h2>DeskTop & Laptop</h2>
              <a>
                <button type="button" className="btn btn-dark">
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;