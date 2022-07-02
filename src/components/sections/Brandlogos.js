import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/client-1.svg",
  },
  {
    id: 2,
    image: "images/client-2.svg",
  },
  {
    id: 3,
    image: "images/client-3.svg",
  },
  {
    id: 4,
    image: "images/client-4.svg",
  },
  {
    id: 5,
    image: "images/client-5.svg",
  },
  {
    id: 6,
    image: "images/client-6.svg",
  },
  {
    id: 7,
    image: "images/client-7.svg",
  },
  {
    id: 8,
    image: "images/client-8.svg",
  },
];

function Brandlogos() {
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

export default Brandlogos;
