function onClickMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("change");
  let nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

let link = document.getElementsByClassName("link");
for (let i of link) {
  i.addEventListener("click", () => {
    let nav = document.getElementById("nav");
    nav.classList.toggle("show");
    let menu = document.getElementById("menu");
    menu.classList.toggle("change");
  });
}

// function for  changing theme
let transition = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  if (this.checkbox.checked) {
    transition();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    transition();
    document.documentElement.setAttribute("data-theme", "light");
  }
});
