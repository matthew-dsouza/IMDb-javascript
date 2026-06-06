'use strict';

import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";
import { search } from "./search.js";
import { getWatchlist } from "./watchlist.js";

sidebar();

const pageContent =
    document.querySelector("[page-content]");

const watchlist = getWatchlist();

const section = document.createElement("section");

section.classList.add(
    "movie-list",
    "genre-list"
);

section.innerHTML = `
    <div class="title-wrapper">
        <h1 class="heading">
            My Watchlist
        </h1>
    </div>

    <div class="grid-list"></div>
`;

if (!watchlist.length) {

    section.innerHTML += `
        <p>No movies added yet.</p>
    `;
}
else {

    const grid =
        section.querySelector(".grid-list");

    for (const movie of watchlist) {

        const card =
            createMovieCard(movie);

        grid.appendChild(card);
    }
}

pageContent.appendChild(section);

search();