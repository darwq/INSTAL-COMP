// DOM

const arrow = document.querySelector(".more a");

const colors = ["dark","light"];

const random = Math.floor(Math.random() * colors.length);

arrow.classList.add(colors[random]);