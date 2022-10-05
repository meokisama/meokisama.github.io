import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "UI/UX design",
    content:
      "Tự học chứ không có trường lớp bài bản gì, chỉ là phục vụ mục đích cá nhân mà thôi.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Chủ yếu là Wordpress và NodeJS cùng các thứ liên quan như React, Gatsby.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.png",
    title: "Security",
    content:
      "Trên trường dạy được những gì thì làm theo được chừng đó, the sadness.",
    color: "#3CB371",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Skill Set" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Có câu hỏi nào hông?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click
            </Link>{" "}
            để liên hệ tớ! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
