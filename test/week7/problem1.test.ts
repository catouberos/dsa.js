import { expect, test, beforeEach } from "bun:test";
import { merge, mergeSort, quickSort } from "../../src/week7/problem1";

let randomNumbers: number[];

beforeEach(() => {
    randomNumbers = Array.from({ length: 1_000_000 }, () =>
        Math.floor(Math.random() * 1_000_000),
    );
});

test("quick sort", () => {
    expect(quickSort(randomNumbers)).toEqual(
        randomNumbers.sort((a, b) => a - b),
    );
});

test("merge", () => {
    expect(merge([10], [9])).toEqual([9, 10]);
    expect(merge([1, 2, 3, 4, 8], [4, 7, 9, 10, 12])).toEqual([
        1, 2, 3, 4, 4, 7, 8, 9, 10, 12,
    ]);
});

test("merge sort", () => {
    expect(mergeSort(randomNumbers)).toEqual(
        randomNumbers.sort((a, b) => a - b),
    );
});
