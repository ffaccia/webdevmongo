function isEmpty(s) {
    return s.trimRight() === ""
}

function isFilled(s) {
    return !isEmpty(s)
}

function zTrimRight(s) {
    return s.replace(/\s+$/, '')
}

function swapVars(a, b) {
    a ^= b; /* a == 0111; b == 0100 */
    b ^= a; /* a == 0111; b == 0011 */
    a ^= b; /* a == 0100; b == 0011 */
    return {"a":a, "b":b}
}

