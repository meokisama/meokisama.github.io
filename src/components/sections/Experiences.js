import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Trường ĐH Công nghệ Thông tin",
    years: "2019 - Present",
    content:
      "Theo học chuyên ngành An toàn thông tin tại trường ĐH CNTT, ĐHQG TP.HCM.",
  },
  {
    id: 2,
    title: "Trường THPT Anh Sơn I",
    years: "2016 - 2019",
    content:
      "Giai đoạn thămg trầm đời học sinh được đánh dấu bởi ngôi trường này.",
  },
  {
    id: 3,
    title: "Mẫu giáo - Tiểu học - THCS",
    years: "Trước 2016",
    content:
      "Giai đoạn nhân sinh nhàn nhã tẻ nhạt vô vị...",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Freelancer Designer",
    years: "2018 - Present",
    content:
      "Học thiết kế để khè người ta là chính chứ kiếm tiền không được bao nhiêu.",
  },
  {
    id: 2,
    title: "Thực tập sinh",
    years: "2022",
    content:
      "Chuẩn bị bước chân vào đời tự kiếm tiền các thứ, và bước đầu là đi thực tập, the sadness...",
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
