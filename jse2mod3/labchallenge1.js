function getRandomSet(m, n, allowRepeats, sorted) {
    if (!allowRepeats && m > n + 1) {
        throw new Error("Cannot draw more unique numbers than the range allows.");
    }

    const resultSet = new Set();

    while (resultSet.size < m) {
        const num = Math.floor(Math.random() * (n + 1));
        if (allowRepeats) {

            resultSet.add(num + Math.random() * 0.000001);
        } else {
            resultSet.add(num);
        }
    }

    let resultArray = Array.from(resultSet);
    if (allowRepeats) {
        resultArray = resultArray.map(x => Math.floor(x));
    }

    if (sorted) {
        resultArray.sort((a, b) => a - b);
    }

    return resultArray;
}

// Test the function
console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));