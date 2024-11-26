const colors = document.querySelectorAll(".colors");
const body = document.querySelector("body");
colors.forEach(function (color) {
  console.log(colors);
  color.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "355C7D") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "725A7A") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "C56C86") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "FF7582") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
