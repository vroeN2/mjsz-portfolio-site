const photoDiv = document.querySelector("#photo");
const name = document.querySelector("#name");

name.addEventListener('mouseenter', () => {
    photoDiv.classList.remove("invisible");
    photoDiv.classList.add("visible");
});

name.addEventListener('mouseleave', () => {
    photoDiv.classList.remove("visible")
    photoDiv.classList.add("invisible");
});
