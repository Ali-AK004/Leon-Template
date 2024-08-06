const showDate = document.querySelector(".date");
const date = new Date().getFullYear();
showDate.append(date);

// Navigation Logic
// opening NavMenu
const NavIcon = document.querySelector(".icon");
const navLinksContainer = document.querySelector("header .container");
const openNav = () => {
  navLinksContainer.classList.toggle("openMenu");
};
NavIcon.addEventListener("click", openNav);

// closes NavMenu when clicked on any link on phone
const navPhoneLinks = document.querySelectorAll("header ul li a");
navPhoneLinks.forEach((link) =>
  link.addEventListener("click", function () {
    navLinksContainer.classList.remove("openMenu");
  })
);

// adds active class to the nav links when the right section comes to viewport
const activeSections = document.querySelectorAll(".check-active");
const navLinks = document.querySelectorAll("header ul li a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          if (entry.isIntersecting) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  },
  {
    threshold: 0.5,
  }
);
activeSections.forEach((section) => {
  observer.observe(section);
});

// scroll to top button
const scrollBtn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 1000) {
    scrollBtn.classList.add("shown");
  } else {
    scrollBtn.classList.remove("shown");
  }
});
const handleScroll = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
scrollBtn.addEventListener("click", handleScroll);
