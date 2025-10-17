const calculate = () => {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      // console.log(value);
      screen.value += value;
    });
  });
  // Equals
  equal.addEventListener("click", () => {
    let answer = eval(screen.value);
    screen.value = answer;
  });
  // clear
  clear.addEventListener("click", () => {
    screen.value = "";
  });
};

calculate();

// let expre = "2+3*5";
// let ans = eval(expre);
// console.log(ans);