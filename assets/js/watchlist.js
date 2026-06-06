'use strict';

const WATCHLIST_KEY = "watchlist";

export function getWatchlist() {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
}

export function saveWatchlist(watchlist) {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
}

export function isInWatchlist(movieId) {
    const watchlist = getWatchlist();

    return watchlist.some(movie => movie.id === movieId);
}

export function addToWatchlist(movie) {

    const watchlist = getWatchlist();

    if (!watchlist.some(item => item.id === movie.id)) {
        watchlist.push(movie);
        saveWatchlist(watchlist);
    }
}

export function removeFromWatchlist(movieId) {

    const watchlist = getWatchlist().filter(
        movie => movie.id !== movieId
    );

    saveWatchlist(watchlist);
}

export function toggleWatchlist(movie) {

    if (isInWatchlist(movie.id)) {
        removeFromWatchlist(movie.id);
        return false;
    }

    addToWatchlist(movie);
    return true;
}