/**
 * Validate fields make sure they are not empty.
 * @param {*} required - Any datatype
 * @returns {boolean} - if fields pass verif
 */
function isValid(required) {
    return !(required.includes(undefined) ||
        required.includes(null) ||
        required.includes(''));
}
module.exports.isValid = isValid;