/*page transition*/
document.getElementById("open-console-button").onclick = function () {
  setTimeout(() => {
    document.getElementById("welcome-screen").style.display = "none";
  }, 50);

  setTimeout(() => {
    document.getElementById("heading-wrapper").style.visibility = "visible";
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

document.getElementById("menu-button").onmouseover = function () {
  this.classList.remove("mb-minimize");
};

document.getElementById("menu-button").onmouseout = function () {
  this.style.height = "100px";
  this.style.width = "100px";
  setTimeout(() => {
    this.classList.add("mb-minimize");
  }, 200);
};
