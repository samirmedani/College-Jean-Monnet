// Scrolling menu open and close
const OpenNav = document.querySelector(".fa-solid");
const NavCategory = document.querySelector(".NavCategory");

OpenNav.addEventListener("click", function () {
  NavCategory.classList.toggle("hidden");
});

// College
const college = document.querySelector(".college");
const collegeSubmenu = document.querySelector(".college-submenu");

college.addEventListener("click", function () {
  collegeSubmenu.classList.toggle("hidden");
});
