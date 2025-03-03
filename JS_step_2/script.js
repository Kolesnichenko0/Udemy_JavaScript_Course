/* Lesson Assignment:

1) Automate questions to the user about films using a loop

2) Make it so that the user cannot leave an answer as an empty string,
cancel the answer or enter a film title longer than 50 characters. If this happens -
return the user to the questions again. (Any string can be accessed as
str.length - and get its length)

3) Using conditions, check personalMovieDB.count, and if it is less than 10 - print the message
‘You've watched quite few films’, if it's between 10 and 30 - “You're a classic viewer”, and if it's more than that - “You're a film buff”.
‘You're a film buff.’ And if it doesn't fit any of the options - ‘An error has occurred’

4) Practise and rewrite the loop in two more ways*/

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

let resultMessage = '';

if (personalMovieDB.count < 10) {
    resultMessage = 'You watched very few movies';
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    resultMessage = 'You are a classic viewer';
} else if (personalMovieDB.count >= 30) {
    resultMessage = 'You are a movie fan';
} else {
    resultMessage = 'An error occurred';
}

console.log(resultMessage);

for (let i = 0; i < 2; i++) {
    let lastWatchedFilm = prompt('One of the last films you saw?', '');

    if (lastWatchedFilm === null || lastWatchedFilm === '' || lastWatchedFilm.length > 50) {
        i--;
    } else {
        let rating = +prompt('How much would you rate it?', '');

        personalMovieDB.movies[lastWatchedFilm] = rating;
    }

}

console.log(personalMovieDB);
console.log(`personalMovieDB: ${JSON.stringify(personalMovieDB, null, 4)}`);
