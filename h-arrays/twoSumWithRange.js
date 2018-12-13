// two sum problem, with an additional error range

// Given an array of movies with their showtime durations
// and a number for break time with its margin of error range
// Find any two movies that you can watch within the time available

function twoSumWithRange(movieList, breaktime, margin) {
    // first, sort the movie duration array from smallest to biggest
    const sortedMovieList = movieList.sort((a, b) => a - b);
    console.log(sortedMovieList);

    if (sortedMovieList.length > 1) {

    for (let i = 0; i < sortedMovieList.length; i++) {
    // while( sortedMovieList.length > 1) {
        const shortestMovie = sortedMovieList[i];
        const longestMovie = sortedMovieList[sortedMovieList.length - 1];

        let diff = breaktime - (shortestMovie + longestMovie);
        console.log(diff);

        // if -margin <= difference <= +margin, then it's acceptable
        if (Math.abs(diff) <= margin) {
            console.log(`It's in the range. Current pair: [${shortestMovie}:${longestMovie}]`);
            return true;
        }
        if (diff < margin) {
            //longestMovie = sortedMovieList[sortedMovieList.length - ]
            sortedMovieList.pop(); // remove the last item, which is also the longest duration
        }
        if (diff > margin) {
            sortedMovieList.shift(); // remove the first item, which is the shortest duration
        }
        twoSumWithRange(sortedMovieList, breaktime, margin);

    }
}

    return false; // can't find any matching pair that total up within the margin range
}


const movieList = [60, 45, 55, 40, 120, 30, 150, 100, 90, 20];
twoSumWithRange(movieList, 100, 20); // 100 mins break, 20 mins grace period
twoSumWithRangeReturnAllPairs(movieList, 100, 20); // 100 mins break, 20 mins grace period
// [20, 100], [20, 80], [20, 60], [30, 90], [30, 55], [30, 60], [40, 60]
// [40, 55], [45, 60], [45, 55], [55, 60], [40, 45]