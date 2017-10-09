function calculateAverage(array) {
    return array.reduce((acc, item) => acc + item, 0)/array.length;
}

function calculateMedian(array) {
    return array.sort((a, b) => a - b)[array.length / 2];
}

function calcFilter(array) {
    var av = calculateAverage(array);
    var med = calculateMedian(array);
    return array.filter(item => item > Math.min(av,med) && item <= Math.max(av,med));
}

module.exports.median = calculateMedian;
module.exports.average = calculateAverage;
module.exports.filter = calcFilter;
