import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Hiệu ứng cánh bướm với Python",
    image: "images/blog/1.png",
    filesource: "../../blogs/hieu-ung-canh-buom-python.md",
    date: "07 February, 2021",
    author: "Meoki",
    category: "Science",
  },
  {
    id: 2,
    title: "Password Đại Cương",
    image: "images/blog/2.png",
    filesource: "../../blogs/password-dai-cuong.md",
    date: "13 January, 2021",
    author: "Meoki",
    category: "Hacking",
  },
  {
    id: 3,
    title: "Design Pattern trong Thiết kế",
    image: "images/blog/3.png",
    filesource: "../../blogs/design-pattern-trong-thiet-ke.md",
    date: "29 November, 2020",
    author: "Meoki",
    category: "Design",
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Blog Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <a href="https://meoki.vn/blog" className="btn btn-default">
            Tất cả bài viết
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
