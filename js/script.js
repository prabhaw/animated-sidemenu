window.onload = function () {
  var mainInputStart = document.getElementById("nepali-datepicker-start");
  mainInputStart.nepaliDatePicker();

  var mainInputEnd = document.getElementById("nepali-datepicker-end");
  mainInputEnd.nepaliDatePicker();
};

document
  .querySelector("#search-toggle-button")
  .addEventListener("click", function () {
    document
      .querySelector(".section.collapsible")
      .classList.toggle("collapsed");
    document
      .querySelector(".newsupdatesection.collapsible")
      .classList.remove("update-news-collapsed");
  });

document
  .querySelector("#news-update-section")
  .addEventListener("click", function () {
    document
      .querySelector(".section.collapsible")
      .classList.remove("collapsed");

    document
      .querySelector(".newsupdatesection.collapsible")
      .classList.toggle("update-news-collapsed");
  });
