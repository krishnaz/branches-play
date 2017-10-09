function calculateAverage(array) {
    return array.reduce((acc, item) => acc + item, 0);
}
module.exports.average = calculateAverage;
