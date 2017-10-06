function calculateAverage(array) {
    let acc = 0;
    for(let i=0; i<array.length; i++){
        acc += array[i];
    }
    return acc/array.length;
}
module.exports.average = calculateAverage;
