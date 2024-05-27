/*page transition*/
document.getElementById("open-console-button").onclick = function () {
  setTimeout(() => {
    document.getElementById("welcome-screen").style.display = "none";
  }, 50);

  setTimeout(() => {
    document.getElementById("page-wrapper").style.visibility = "visible";
  }, 101);
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
