/*
 * Helper function to generate a class string from an array of classes
 * @param {Array<string | false | null | undefined>} classes - Array of class names
 * @return {string} - A string of class names joined by spaces
 */
export const classNames = (...classes: Array<string | false | null | undefined>): string =>
    classes.filter(Boolean).join(" ");

/*
 * Helper function to format a number into thousands
 * @param {number} x - The number to format
 * @return {string} - The formatted number as a string (e.g., "1.2k" for 1200)
 */
export const FormatThousands = (x: number): string => Math.floor(x / 100) / 10.0 + "k";
