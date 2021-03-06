// two sum problem, with an additional error range

// Given an array of movies with their showtime durations
// and a number for break time with its margin of error range
// Find any two movies that you can watch within the time available

function twoSumWithRange(movieList, breaktime, margin) {
    // first, sort the movie duration array from smallest to biggest
    const sortedMovieList = movieList.sort((a, b) => a - b);
    console.log(sortedMovieList);

    if (sortedMovieList.length > 1) {
        let shortestMovie = sortedMovieList[0];
        let longestMovie = sortedMovieList[sortedMovieList.length - 1];

        for (let i = 0; i < sortedMovieList.length; i++) {
            let diff = breaktime - (shortestMovie + longestMovie);

            // if -margin <= difference <= +margin, then pair is acceptable
            if (Math.abs(diff) <= margin) {
                console.log(`Found a pair in range: [${shortestMovie}:${longestMovie}]`);
                return true;
            } else if (diff < margin) longestMovie = sortedMovieList[sortedMovieList.length - i - 1];
            else shortestMovie = sortedMovieList[i + 1]; // diff > margin, move to next shortest
        }
    }
    return false; // can't find any matching pair that total up within the margin range
}



function twoSumWithRangeReturnAllPairs(movieList, breaktime, margin) {
    const sortedMovieList = movieList.sort((a, b) => a - b);
    const resultPairs = [];

    if (sortedMovieList.length <= 1) return resultPairs;
    while (sortedMovieList.length > 1) {
        let shortestMovie = sortedMovieList[0];
        let longestMovie = sortedMovieList[sortedMovieList.length - 1];

        let diff = breaktime - (shortestMovie + longestMovie);

        // if -margin <= difference <= +margin, then it's acceptable
        if (Math.abs(diff) <= margin) {
            // check undefined b/c a 0 value will return falsy
            resultPairs.push([shortestMovie, longestMovie]);
            console.log(`Added new pair to result: `, resultPairs);

            // TODO: can't just pick shift or pop, need some logic... result should have 12 pairs
            sortedMovieList.pop(); // remove the last added result
            // sortedMovieList.shift(); // remove the first added result
        } else if (diff < margin) {
            sortedMovieList.pop(); // remove the last item, which is also the longest duration
        } else {
            sortedMovieList.shift(); // remove the first item, which is the shortest duration
        }
    }
}


const movieList = [60, 45, 55, 40, 120, 30, 150, 100, 90, 20];
twoSumWithRange(movieList, 100, 20); // 100 mins break, 20 mins grace period
twoSumWithRangeReturnAllPairs(movieList, 100, 20); // 100 mins break, 20 mins grace period
// [20, 100], [20, 80], [20, 60], [30, 90], [30, 55], [30, 60], [40, 60]
// [40, 55], [45, 60], [45, 55], [55, 60], [40, 45]