var yellowBox = document.querySelector(".change-color")
var changeToBlue = function () {
    yellowBox.classList.add("blue-box")
}
yellowBox.addEventListener("click", changeToBlue)
