import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.png",
    userName: "Atsuki Okano",
    subtitle: "Hajime-chan Ga Ichiban!",
    review:
      'Không phải là "không được", mà chỉ là "chưa thử" thôi, đúng không ?',
  },
  {
    id: 2,
    avatar: "images/avatar-2.png",
    userName: "Machi Tokiwa",
    subtitle: "Hanayamata",
    review:
      "Cậu là người duy nhất biết được niềm vui của mình là gì mà, nhưng tớ nghĩ có một người chấp nhận lựa chọn của cậu, cười và khóc cùng cậu, thì đúng là một điều tuyệt vời.",
  },
  {
    id: 3,
    avatar: "images/avatar-3.png",
    userName: "Tsurumaru Kuninaga",
    subtitle: "Touken Ranbu",
    review:
      "Đã là cuộc sống thì phải có bất ngờ chứ. Nếu mọi chuyện xảy ra đều có thể dự đoán, trái tim tôi sẽ khô héo mà chết trước mất thôi.",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Quotes" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
