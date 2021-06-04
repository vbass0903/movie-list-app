const StatBox = ({ inMovies, inPlanMovies }) => {
    const indexOfMax = (arr) => {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    }

    const mode = (arr) => {
        var numMapping = {};
        var greatestFreq = 0;
        var mode;
        arr.forEach(function findMode(number) {
            numMapping[number] = (numMapping[number] || 0) + 1;
    
            if (greatestFreq < numMapping[number]) {
                greatestFreq = numMapping[number];
                mode = number;
            }
        });
        return +mode;
    }

    const mostElement = (movieList, element) => {
        let seen = []
        for (var i = 0; i < movieList.length; i++) {
            seen.push(movieList[i][element])
        }
        return mode(seen)
    }

    return (
        <div>
            <h3>{mostElement(inMovies, "Year")}</h3>
            <h3>{mostElement(inMovies, "Director")}</h3>
            <h3>{mostElement(inMovies, "Rated")}</h3>
        </div>
    )
}

export default StatBox
