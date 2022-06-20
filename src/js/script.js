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

// !Hero Pagination
const heroTab = document.querySelectorAll(".hero-tab");
const heroText = document.querySelectorAll(".hero-text");
const heroImg = document.querySelectorAll(".hero-img");

const heroPagination = function (selectedPage) {
  for (let i = 0; i < heroTab.length; i++) {
    heroTab[i].classList.remove("bg-zinc-800");
    heroTab[i].classList.add("bg-white");

    heroText[i].classList.add("hidden");

    heroImg[i].classList.add("hidden");
  }

  heroTab[selectedPage].classList.remove("bg-white");
  heroTab[selectedPage].classList.add("bg-zinc-800");

  heroText[selectedPage].classList.remove("hidden");

  heroImg[selectedPage].classList.remove("hidden");
};

for (let i = 0; i < heroTab.length; i++) {
  heroTab[i].addEventListener("click", function () {
    heroPagination(i);
  });
}

// !Filter Category Products
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryProducts = document.querySelectorAll(".product-list");

const toggleFilter = function (selectedFilter) {
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].classList.remove("bg-zinc-800");
    filterBtn[i].classList.remove("text-zinc-50");
  }

  filterBtn[selectedFilter].classList.add("bg-zinc-800");
  filterBtn[selectedFilter].classList.add("text-zinc-50");
};

const filterCategory = function (filtered) {
  for (let i = 0; i < categoryProducts.length; i++) {
    if (filtered === "All") {
      categoryProducts[i].classList.remove("hidden");
    } else if (filtered === categoryProducts[i].getAttribute("data-category")) {
      categoryProducts[i].classList.remove("hidden");
    } else {
      categoryProducts[i].classList.add("hidden");
    }
  }
};

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    toggleFilter(i);

    let filter = filterBtn[i].getAttribute("data-filter");
    filterCategory(filter);
  });
}
