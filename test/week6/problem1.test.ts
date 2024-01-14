import { expect, test } from "bun:test";
import { bubbleSort, selectionSort } from "../../src/week6/problem1";

test("bubble sort", () => {
    expect(bubbleSort([5, 1, 9, 6, 2])).toEqual([5, [1, 2, 5, 6, 9]]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([0, [1, 2, 3, 4, 5]]);
    expect(bubbleSort([9, 8, 7, 6, 5])).toEqual([10, [5, 6, 7, 8, 9]]);
});

test("selection sort", () => {
    expect(selectionSort([5, 1, 9, 6, 2]).at(-1)).toEqual([1, 2, 5, 6, 9]);
    expect(selectionSort([5, 1, 9, 6, 2])).toEqual([
        [5, 1, 9, 6, 2],
        [1, 5, 9, 6, 2],
        [1, 2, 9, 6, 5],
        [1, 2, 5, 6, 9],
        [1, 2, 5, 6, 9],
    ]);
    expect(selectionSort([1, 2, 3, 4, 5]).at(-1)).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([9, 8, 7, 6, 5]).at(-1)).toEqual([5, 6, 7, 8, 9]);
});
