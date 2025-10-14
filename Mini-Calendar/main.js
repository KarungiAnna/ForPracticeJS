
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
//importing image
const image = new Image();
image.src = "imgg1.jpg";

image.onload = function() {
  document.body.style.backgroundImage = 'url(imgg1.jpg)';
};


const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());

// const month = date.getMonth();

monthNameEl.textContent = date.toLocaleDateString("en", {
  month: "long",
});

dayNameEl.textContent = date.toLocaleDateString("en", {
  weekday: "long",
});

dayNumEl.textContent = date.getDate();
yearEl.textContent = date.getFullYear();
