/* Lesson Assignment:

1) Create a variable numberOfFilms and put the answer from the user to the question:
'How many films have you watched so far?

2) Create a personalMovieDB object and put the following properties into it:
    - count - the answer to the first question is passed here
    - movies - put an empty object in this property
    - actors - also place an empty object
    - genres - place an empty array here
    - privat - put boolean (logical) value false in this property.

3) Ask the user two questions each:
    - ‘One of the most recently watched films?’
    - ‘How much would you rate it?’
The answers should be placed in separate variables
Write the answers to the movies object in the format:
    movies: {
        ‘logan’: ‘8.1’
    }

Check that everything works without errors in the console */

'use strict';

const numberOfFilms = +prompt('How many films have you seen so far?', '');

console.log(`numberOfFilms: ${numberOfFilms}`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);
console.log(`personalMovieDB: ${JSON.stringify(personalMovieDB, null, 4)}`);

let lastWatchedFilm = prompt('One of the last films you saw?', '');
let rating = +prompt('How much would you rate it?', '');
personalMovieDB.movies[lastWatchedFilm] = rating;

lastWatchedFilm = prompt('One of the last films you saw?', '');
rating = +prompt('How much would you rate it?', '');
personalMovieDB.movies[lastWatchedFilm] = rating;

console.log(personalMovieDB);
console.log(`personalMovieDB: ${JSON.stringify(personalMovieDB, null, 4)}`);
