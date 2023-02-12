import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "script",
  },
  {
    id: 3,
    text: "web",
  },
  {
    id: 4,
    text: "design",
  },
  {
    id: 5,
    text: "app",
  },
];

const allData = [
  {
    id: 1,
    title: "A Lonely Comet - Một anime blog cho những kẻ mộng mơ",
    category: "web",
    image: "images/works/01.jpg",
    link: "https://alonelycomet.meoki.vn",
  },
  {
    id: 2,
    title: "BookStore - Cửa hàng bán sách",
    category: "web",
    image: "images/works/02.jpg",
    link: "https://github.com/meokisama/NT230.Store",
  },
  {
    id: 3,
    title: "Bilibili Subtitles Downloader",
    category: "script",
    image: "images/works/03.jpg",
    link: "https://github.com/meokisama/bilibili-subs",
  },
  {
    id: 4,
    title: "CTF Platform With Python Django",
    category: "app",
    image: "images/works/04.jpg",
    link: "https://github.com/meokisama/DjangoCTF",
  },
  {
    id: 5,
    title: "Together - Một thứ đã từng lãng mạn",
    category: "web",
    image: "images/works/05.jpg",
    link: "https://meoki.vn/together",
  },
  {
    id: 6,
    title: "Logo kỉ niệm 10 năm Naruto Manga Fans",
    category: "design",
    image: "images/works/08.jpg",
    link: "https://www.behance.net/gallery/132945335/10-year-old-NarutoMangaFans-Logo-Concept",
  },
  {
    id: 7,
    title: "VSCode Context Menu for Nautilus",
    category: "script",
    image: "images/works/07.jpg",
    link: "https://github.com/meokisama/vscodemenu",
  },
  {
    id: 8,
    title: "Pathfinding - Tìm đường đi ngắn nhất",
    category: "web",
    image: "images/works/06.jpg",
    link: "https://github.com/meokisama/pathfinding",
  },
  {
    id: 9,
    title: "K51D1 Logo Design",
    category: "design",
    image: "images/works/09.jpg",
    link: "https://www.behance.net/gallery/98781675/Point-Of-Sales-Material",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "Hết rồi"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Xem thêm
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
