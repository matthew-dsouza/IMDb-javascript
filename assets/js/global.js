'use strict';

// Add event on multiple elements

const addEventOnElements = function(elements,eventType,callback){
    for (const elem of elements) elem.addEventListener(eventType,callback);
}

// Toggle search in mobile devices || small screens

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
searchBox.classList.toggle("active");
});
