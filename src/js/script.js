"use strict";

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

// !Filter Category Products
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryProducts = document.querySelectorAll(".product-list");

const toggleFilter = function (selectedFilter) {
  console.log(selectedFilter);
};

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    filterBtn[0].classList.remove("bg-zinc-800");
    filterBtn[0].classList.remove("text-zinc-50");

    filterBtn[i].classList.toggle("bg-zinc-800");
    filterBtn[i].classList.toggle("text-zinc-50");
  });
}
