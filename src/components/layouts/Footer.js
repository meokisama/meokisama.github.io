import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Bolby Template.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
