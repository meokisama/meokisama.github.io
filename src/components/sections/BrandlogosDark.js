import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/client-1-light.svg",
  },
  {
    id: 2,
    image: "images/client-2-light.svg",
  },
  {
    id: 3,
    image: "images/client-3-light.svg",
  },
  {
    id: 4,
    image: "images/client-4-light.svg",
  },
  {
    id: 5,
    image: "images/client-5-light.svg",
  },
  {
    id: 6,
    image: "images/client-6-light.svg",
  },
  {
    id: 7,
    image: "images/client-7-light.svg",
  },
  {
    id: 8,
    image: "images/client-8-light.svg",
  },
];

function BrandlogosDark() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandlogosDark;
