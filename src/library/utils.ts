/*
 * Helper function to generate a class string from an array of classes
 * @param {Array<string | false | null | undefined>} classes - Array of class names
 * @return {string} - A string of class names joined by spaces
 */
export const classNames = (...classes: Array<string | false | null | undefined>): string =>
    classes.filter(Boolean).join(" ");

/*
 * Helper function to format a number with abbreviated suffixes
 * @param {number} x - The number to format
 * @return {string} - The formatted number as a string (e.g., 7 → "7", 1200 → "1.2k", 1500000 → "1.5M")
 */
export const FormatThousands = (x: number): string => {
    if (x >= 1_000_000) return Math.floor(x / 100_000) / 10 + "M";
    if (x >= 1_000) return Math.floor(x / 100) / 10 + "k";
    return String(x);
};
