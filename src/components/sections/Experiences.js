import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Trường ĐH Công nghệ Thông tin",
    years: "2019 - 2023",
    content:
      "Theo học chuyên ngành An toàn thông tin tại trường ĐH CNTT, ĐHQG TP.HCM.",
  },
  {
    id: 2,
    title: "Trường THPT Anh Sơn I",
    years: "2016 - 2019",
    content:
      "Lên voi xuống chó...",
  },
  {
    id: 3,
    title: "Mẫu giáo - Tiểu học - THCS",
    years: "Trước 2016",
    content:
      "Nhân sinh nhàn nhã...",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Thực tập sinh CSE",
    years: "2022",
    content:
      "Bắt đầu với vị trí Cyber Security Engineer Intern (GPT Group, HCM City), the sadness...",
  },

  {
    id: 2,
    title: "Freelancer Designer",
    years: "2018 - 2022",
    content:
      "Học thiết kế để khè người ta là chính chứ kiếm tiền không được bao nhiêu.",
  },

];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
