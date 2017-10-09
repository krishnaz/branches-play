function get(text) {
    /**
     * Get Array with every second letter of string from text param.
     */
    let array = Array(text.length / 2);
    for (let i = 0; i < text.length / 2; i++) {
        array[i] = text[i * 2 + 1];
    }
    return array;
}


function getString(text) {
    return get(text).join("");
}


module.exports = getString;
