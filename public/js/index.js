function isEmpty(s) {
    return s.trimRight() === ""
}

function isFilled(s) {
    return !isEmpty(s)
}

function zTrimRight(s) {
    return s.replace(/\s+$/, '')
}

