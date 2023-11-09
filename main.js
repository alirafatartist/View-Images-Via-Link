const img = document.querySelector("img");
const smallImg = document.getElementById("small");
const input = document.querySelector("input");
const button = document.querySelector("button");
const pageIcon = document.querySelector(".page-icon");

button.addEventListener("click", changeImage);

function changeImage() {
  let srcValue = input.value;
  let defultIcon = "https://cdn-icons-png.flaticon.com/512/2659/2659360.png";
  let myTitle = "made with ❤ by Ali Rafat";
  if (srcValue == 0) {
    img.src = defultIcon;
    smallImg.src = defultIcon;
    img.title = myTitle;
    smallImg.title = myTitle;
  } else {
    img.src = srcValue;
    smallImg.src = srcValue;
    img.title = myTitle;
    smallImg.title = myTitle;
    pageIcon.href = srcValue;
  }
}
