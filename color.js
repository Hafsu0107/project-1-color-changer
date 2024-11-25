const buttons = document.querySelector(".colors");
const body = document.querySelector("body");
colors.forEach(function (color) {
  console.log(button);
  colors.addEvenListner("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "355C7D") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "725A7A") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
