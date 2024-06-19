// Global Variables
var welcomescreen = document.getElementById("welcome-screen");
var pagewrapper = document.getElementById("page-wrapper");

// Page Transition
document.getElementById("open-console-button").onclick = function () {
  welcomescreen.style.transition = "opacity 1s";

  setTimeout(function () {
    welcomescreen.style.opacity = "0";
  }, 0);

  setTimeout(function () {
    welcomescreen.style.display = "none";
  }, 1000); // Matches the transition duration

  setTimeout(function () {
    pagewrapper.style.visibility = "visible";
    pagewrapper.style.opacity = "1";
  }, 1000); // Set visibility and opacity after welcome screen is hidden
};

// Tracking Button
const move = document.getElementById("move");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  move.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 2000, fill: "forwards" }
  );
};

// Logo Animation

// Options Button
document.getElementById("menu-button").onmouseover = function () {
  this.style.transform = "scale(1.5)";
  setTimeout(() => {
    this.classList.remove("mb-minimize");
  }, 200);
};

document.getElementById("menu-button").onmouseout = function () {
  this.style.transform = "scale(1)";
  setTimeout(() => {
    this.classList.add("mb-minimize");
  }, 200);
};

// Scroll Buttons
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quick-cards-container");
  const btnScrollLeft = document.querySelector(".btn-scroll.left");
  const btnScrollRight = document.querySelector(".btn-scroll.right");
  const cardWidth = document.querySelector(".quick-card").offsetWidth + 10; // Including gap

  let scrollInterval;

  btnScrollLeft.addEventListener("mousedown", () => {
    scrollInterval = setInterval(() => {
      container.scrollBy({
        left: -75, // Adjust this value for desired scrolling speed
        behavior: "smooth",
      });
    }, 10); // Adjust this value for smoother/faster scrolling
  });

  btnScrollLeft.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
  });

  btnScrollRight.addEventListener("mousedown", () => {
    scrollInterval = setInterval(() => {
      container.scrollBy({
        left: 75, // Adjust this value for desired scrolling speed
        behavior: "smooth",
      });
    }, 10); // Adjust this value for smoother/faster scrolling
  });

  btnScrollRight.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
  });
});
