// Setting Vars
let btn = document.getElementById("button");
let menu = document.getElementById("menu");

btn.onclick = clickedBtn;

// Btn Function
function clickedBtn() {
  menu.classList.toggle("hidden");
  // menu.classList.add("block");
}

// Add Active Trick
let lis = Array.from(menu.children)

lis.forEach(el => {
  el.firstElementChild.addEventListener("click", () => {
    lis.forEach(el => {
      el.firstElementChild.classList.remove("active")
    });
    el.firstElementChild.classList.add("active")
  });
});