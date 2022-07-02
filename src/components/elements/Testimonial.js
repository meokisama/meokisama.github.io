import React from "react";

function Testimonial({ slider }) {
  const { avatar, userName, subtitle, review } = slider;
  return (
    <div className="testimonial-item text-center mx-auto">
      <div className="thumb mb-3 mx-auto">
        <img src={avatar} alt="customer-name" />
      </div>
      <h4 className="mt-3 mb-0">{userName}</h4>
      <span className="subtitle">{subtitle}</span>
      <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
        <p className="mb-0">{review}</p>
      </div>
    </div>
  );
}

export default Testimonial;
