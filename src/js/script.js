// PC version
const myli = document.querySelectorAll(".liSelected");
console.log(myli);

myli.forEach((element) => {
  element.addEventListener("click", function () {
    const myChild = element.children[1];

    myChild.classList.toggle("hidden");

    this.classList.toggle("colorDesktopBurger");
  });
});

const myBurger = document.querySelector(".burger-container");
const myScrollingMenu = document.querySelector(".scrolling-menu");

myBurger.addEventListener("click", function () {
  myScrollingMenu.classList.toggle("hidden");
});

window.onresize = function () {
  const Mywidth = window.innerWidth;
  if (Mywidth >= 1474) {
    myScrollingMenu.classList.remove("hidden");
  }
};
