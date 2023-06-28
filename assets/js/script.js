lightbox();
menuMobile();

function lightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-img");
  const lightboxReadmMoree = document.querySelector(".lightbox-readMore");
  const lightboxClose = document.querySelector(".lightbox-close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imageUrl = item
        .querySelector(".gallery-image")
        .getAttribute("data-src");
      const pageLink = item
        .querySelector(".gallery-image")
        .getAttribute("data-link");

      lightboxImage.setAttribute("src", imageUrl);
      lightboxReadmMoree.setAttribute("href", pageLink);

      lightbox.style.display = "block";
    });
  });

  const closeModal = () => {
    lightbox.style.display = "none";
  };

  lightboxClose.addEventListener("click", closeModal);
}

function menuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  const toggleMenu = (event) => {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  };

  btnMobile.addEventListener("click", toggleMenu);
}

const listaLink = document.querySelectorAll("nav a");

listaLink.forEach((link) => {
  link.addEventListener("click", () => {
    const navlist = document.querySelector("nav");
    navlist.classList.remove("active");
  });
});
