const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (details) {
  cursor.style.left = details.x + "px";
  cursor.style.top = details.y + "px";
  console.log(details.x, details.y);
});
