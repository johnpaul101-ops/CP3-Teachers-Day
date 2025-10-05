const messageCard = document.querySelector(".message__card");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    messageCard.classList.add("active");
  } else {
    messageCard.classList.remove("active");
  }
});
