'use strict';

// Add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

// Toggle search in mobile devices || small screens

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");


addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
});

// removes the search query after clicking the close search icon
addEventOnElements(searchTogglers, "click", function () {
    document.getElementById('textfield1').value = "";
});
addEventOnElements(searchTogglers, "click", function () {
    document.getElementById('textfield2').value = "";
});
addEventOnElements(searchTogglers, "click", function () {
    document.getElementById('textfield3').value = "";
});



/*
 * Store movieId in `localStorage` 
 * when you click any movie card
*/

const getMovieDetail = function (movieId) {

    window.localStorage.setItem("movieId", String(movieId));

}



const getMovieList = function (urlParam, genreName) {
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}