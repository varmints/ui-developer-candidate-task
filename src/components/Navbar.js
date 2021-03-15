const Navbar = (e) => {
  const current = e.currentTarget;
  current.classList.toggle("opened");
  if (current.classList.contains("opened")) {
    current.setAttribute("aria-expanded", current.classList.contains("opened"));
    document.querySelector(".navbar__menu-button ~ ul").style.left = "0%";
  } else {
    current.setAttribute("aria-expanded", current.classList.contains("opened"));
    document.querySelector(".navbar__menu-button ~ ul").style.left = "-100%";
  }
};

export default Navbar;
