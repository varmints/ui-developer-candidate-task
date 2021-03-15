import Splide from "@splidejs/splide";

const Gallery = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const navSlider = new Splide("#nav-slider", {
      rewind: false,
      fixedWidth: 100,
      fixedHeight: 74,
      isNavigation: true,
      gap: 30,
      focus: "center",
      pagination: false,
      cover: true,
      arrows: false,
      breakpoints: {
        600: {
          fixedWidth: 66,
          fixedHeight: 40,
        },
      },
    }).mount();

    // Create the main slider.
    const primarySlider = new Splide("#primary-slider", {
      classes: {
        arrows: "splide__arrows splide__arrows--right-side ",
      },
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      arrows: true,
      cover: true,
    });

    // Set the thumbnails slider as a sync target and then call mount.
    primarySlider.sync(navSlider).mount();

    const navSlider2 = new Splide("#nav-slider-2", {
      rewind: false,
      fixedWidth: 100,
      fixedHeight: 74,
      isNavigation: true,
      gap: 30,
      focus: "center",
      pagination: false,
      cover: true,
      arrows: false,
      breakpoints: {
        600: {
          fixedWidth: 66,
          fixedHeight: 40,
        },
      },
    }).mount();

    // Create the main slider.
    const primarySlider2 = new Splide("#primary-slider-2", {
      classes: {
        arrows: "splide__arrows splide__arrows--left-side ",
      },
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      arrows: true,
      cover: true,
    });

    // Set the thumbnails slider as a sync target and then call mount.
    primarySlider2.sync(navSlider2).mount();
  });
};

export default Gallery;
