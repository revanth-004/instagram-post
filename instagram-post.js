var likeIcon = document.getElementById("like-post");
var saveIcon = document.getElementById("save-post");

likeIcon.addEventListener("click", function () {
  likeIcon.classList.toggle("fa-solid");
  likeIcon.classList.toggle("red-color");
});

saveIcon.addEventListener("click", function () {
  saveIcon.classList.toggle("fa-solid");
});
