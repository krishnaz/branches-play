function calculateAverage(array) {
    return array.reduce((acc, item) => acc + item, 0)/array.length;
}
module.exports.average = calculateAverage;
