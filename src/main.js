import Navbar from "../src/components/Navbar";
import Gallery from "../src/components/Gallery";

const app = () => {
  document
    .getElementsByClassName("navbar__menu-button")[0]
    .addEventListener("click", Navbar);

  const mainNavbar = document.getElementById("main-navbar");

  window.onscroll = function () {
    "use strict";
    if (
      document.body.scrollTop >= 80 ||
      document.documentElement.scrollTop >= 80
    ) {
      mainNavbar.classList.add("scroll");
    } else {
      mainNavbar.classList.remove("scroll");
    }
  };

  const seeMore = document
    .getElementById("scroll-down")
    .addEventListener("click", clickHandler);

  function clickHandler(e) {
    e.preventDefault();
    const offsetTop = document.querySelector("#start-section").offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

// Load app
app();
Gallery();
