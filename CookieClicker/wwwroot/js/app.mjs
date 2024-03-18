/**
 * Generates a random integer between a lower and an upper bound (inclusive).
 * If only one argument is provided, assumes the lower bound is 0.
 * @param {number} lower The lower bound of the range.
 * @param {number} [upper] The upper bound of the range (optional).
 * @returns {number} A random integer between lower and upper (inclusive).
 */
function randomInteger(lower, upper)
{
    if (upper === undefined)
    {
        upper = lower;
        lower = 0;
    }
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * Generates a random integer between a lower and an upper bound (exclusive).
 * If only one argument is provided, assumes the lower bound is 0.
 * @param {number} lower The lower bound of the range.
 * @param {number} [upper] The upper bound of the range (optional).
 * @returns {number} A random integer between lower and upper (exclusive).
 */
function randomInt(lower, upper)
{
    if (upper === undefined)
    {
        upper = lower;
        lower = 0;
    }
    return lower + Math.floor(Math.random() * (upper - lower));
}

/**
 * Generates a random floating-point number between a lower and an upper bound.
 * If only one argument is provided, assumes the lower bound is 0.
 * The upper bound is exclusive.
 * @param {number} lower The lower bound of the range.
 * @param {number} [upper] The upper bound of the range (optional).
 * @returns {number} A random floating-point number between lower and upper.
 */
function randomFloat(lower, upper)
{
    if (upper === undefined)
    {
        upper = lower;
        lower = 0;
    }
    return lower + Math.random() * (upper - lower);
}