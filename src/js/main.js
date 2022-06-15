"use strict";

// !Navigation Mobile
// const navBtn = document.querySelector(".navBtn");
// const navMobile = document.querySelector(".navMobile");

// const navToggle = function () {
//   navMobile.classList.toggle("translate-x-96");
//   navMobile.classList.toggle("opacity-0");
//   navMobile.classList.toggle("pointer-events-none");
//   navBtn.classList.toggle("pointer-events-none");
//   navBtn.classList.toggle("opacity-0");
// };

// navBtn.addEventListener("click", navToggle);

// navMobile.addEventListener("click", navToggle);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !navMobile.classList.contains("opacity-0")) {
//     navToggle();
//   }
// });

// !Pagination Navigation Mobile
const navLink = document.querySelectorAll(".nav-link");
const navText = document.querySelectorAll(".nav-text");
const navPage = document.querySelectorAll(".nav-page");

const activePage = function (position) {
  // To remove/add classes in all elements
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].classList.remove("py-3");
    navLink[i].classList.remove("px-5");
    navLink[i].classList.remove("bg-zinc-800");
    navLink[i].classList.remove("flex");
    navLink[i].classList.remove("justify-center");
    navLink[i].classList.remove("items-center");
    navLink[i].classList.remove("gap-2");
    navLink[i].classList.remove("rounded-full");

    navText[i].classList.add("hidden");

    navPage[i].classList.add("hidden");
  }

  //  (This) keyword to add the class name on (navLink addEventListener) position
  //  To remove/add classes in element specific position
  navLink[position].classList.add("py-3");
  navLink[position].classList.add("px-5");
  navLink[position].classList.add("bg-zinc-800");
  navLink[position].classList.add("flex");
  navLink[position].classList.add("justify-center");
  navLink[position].classList.add("items-center");
  navLink[position].classList.add("gap-2");
  navLink[position].classList.add("rounded-full");

  navText[position].classList.remove("hidden");

  navPage[position].classList.remove("hidden");
};

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    activePage(i);
  });
}

// !PRODUCTS FILTER BUTTON MOBILE
// const filterBtnMbl = document.querySelector(".filter-btn-mbl");
// const filterBtnTitle = document.querySelector(".filter-btn-title");
// const filterArrowIcon = document.querySelector(".bx-chevron-down");
// const filterList = document.querySelector(".filter-list");
const filterBtn = document.querySelectorAll(".filter-btn");
const filterItemTitle = document.querySelectorAll(".filter-item-title");
const categoryProducts = document.querySelectorAll(".product-list");

const categoryDisplay = function (category) {
  console.log(category);
  if (category === "All") {
    console.log("Good");
  }
};

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    // Toggle Filter Button
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove("bg-zinc-800");
      filterBtn[i].classList.remove("text-zinc-50");
    }

    filterBtn[i].classList.add("bg-zinc-800");
    filterBtn[i].classList.add("text-zinc-50");

    let filter = filterBtn[i].textContent;
    // console.log(filter);

    categoryDisplay(filter);
  });
}
// const toggleNav = function () {
//   filterArrowIcon.classList.toggle("bx-chevron-up");
//   //   filterList.classList.toggle("hidden");
//   filterList.classList.toggle("pointer-events-none");
//   filterList.classList.toggle("opacity-0");
// };

// const categoryDisplay = function () {
//   for (let i = 0; i < categoryProducts.length; i++) {
//     if (filterBtnTitle.textContent === "All") {
//       categoryProducts[i].classList.remove("hidden");
//     } else if (
//       filterBtnTitle.textContent === categoryProducts[i].dataset.category
//     ) {
//       categoryProducts[i].classList.remove("hidden");
//     } else {
//       categoryProducts[i].classList.add("hidden");
//     }
//   }
// };

// filterBtnMbl.addEventListener("click", toggleNav);

// for (let i = 0; i < filterItem.length; i++) {
//   filterItem[i].addEventListener("click", function () {
//     filterBtnTitle.textContent = filterItemTitle[i].textContent;
//     toggleNav();
//     categoryDisplay();
//   });
// }
