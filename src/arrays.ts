/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled: number[] = [...numbers];

    tripled = tripled.map((triple: number): number => triple * 3);

    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let s2I: number[] = [];

    s2I = [
        ...numbers.map((int: string): number =>
            isNaN(parseInt(int)) ? 0 : parseInt(int),
        ),
    ];

    return s2I;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removedDollars: string[] = [...amounts];

    removedDollars = removedDollars.map((num: string): string =>
        num[0] === "$" ? num.slice(1) : num,
    );

    return stringsToIntegers(removedDollars);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let theShouter: string[] = [...messages];

    theShouter = theShouter.filter(
        (str: string): boolean => str[str.length - 1] !== "?",
    );

    theShouter = theShouter.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str,
    );

    return theShouter;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: string[] = [
        ...words.filter((str: string): boolean => str.length < 4),
    ];

    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        let clonedRGB: string[] = [...colors];
        let onlyRGB: boolean = true;

        clonedRGB.map((str: string): boolean =>
            !"REDBLUEGREEN".includes(str.toUpperCase()) ?
                (onlyRGB = false)
            :   true,
        );

        return onlyRGB;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length != 0) {
        let added: number[] = [...addends];
        let sum: number = 0;

        added.map((num: number): number => (sum += num));

        let addedString: string = sum.toString() + "=";

        added.map((num: number): string =>
            added[added.length - 1] === num ?
                (addedString += num.toString())
            :   (addedString += num.toString() + "+"),
        );

        return addedString;
    } else {
        return "0=0";
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newValues: number[] = [...values];
    let firstNegativeIndex: number = -1;
    let i = 0;
    let sum: number = 0;

    newValues.map((num: number): number =>
        num < 0 && firstNegativeIndex === -1 ? (firstNegativeIndex = i) : i++,
    );

    if (firstNegativeIndex >= 0) {
        newValues
            .slice(0, firstNegativeIndex)
            .map((num: number): number => (sum += num));
        firstNegativeIndex++;
    } else {
        newValues.map((num: number): number => (sum += num));
        firstNegativeIndex = newValues.length;
    }

    newValues.splice(firstNegativeIndex, 0, sum);

    return newValues;
}
