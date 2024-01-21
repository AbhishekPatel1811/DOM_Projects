// var isStatus = document.querySelector("h2");
// var addFriend = document.querySelector(".add");
// var removeFriend = document.querySelector(".remove");

// addFriend.addEventListener("click", function () {
//   isStatus.innerHTML = "Friends";
//   isStatus.style.color = "green";
// });

// removeFriend.addEventListener("click", function () {
//   isStatus.innerHTML = "Stranger";
//   isStatus.style.color = "red";
// });

const isStatus = document.querySelector(".st");
const btn = document.querySelector(".add1");
let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});
