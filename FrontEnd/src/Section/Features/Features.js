import React from "react";
import "./Features.css";
const Features = () => {
  const Info = [
    {
      img: "/Icons/icons8-alarm-clock-24 (1).png",
      Title: "365 Day",
      Dis: "For Free Return",
    },
    {
      img: "/Icons/icons8-credit-card-cash-withdrawal-50.png",
      Title: "Payment",
      Dis: "Scure System",
    },
    {
      img: "/Icons/icons8-power-50.png",
      Title: "FastDelivary",
      Dis: "Start From 10$",
    },
    {
      img: "/Icons/icons8-medal-80.png",
      Title: "Mony Guarantee ",
      Dis: "7 Day Back",
    },
  ];
  return (
    <div className="container">
     <div className="Features">
        {Info.map((e) => (
                   <div className="Shild col=md-3 col-lg-3 col-sm-6">

          <div className="Logo">
            <img style={{maxWidth:"30px"}} src={e.img}/>
          </div>
          <div className="FeaturesInfo">
            <h4>{e.Title}</h4>
            <p>{e.Dis}</p>
          </div> 
        </div>

        ))}
  </div>
    </div>
  );
};

export default Features;
