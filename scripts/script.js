/* Global Variables */
var welcomescreen = document.getElementById("welcome-screen");
var pagewrapper = document.getElementById("page-wrapper");

/* Page transition */
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

//moving button//
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

/*logo animation */

/*options button */
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
