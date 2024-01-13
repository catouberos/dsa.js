import { expect, test } from "bun:test";
import { lis } from "../../src/week10/problem3";

test("[8, 3, 4, 6, 5, 2, 0, 7, 9, 1]", () => {
    expect(lis([8, 3, 4, 6, 5, 2, 0, 7, 9, 1])).toEqual([3, 4, 5, 7, 9]);
});

test("[5, 2, 3, 9, 6, 7, 8]", () => {
    expect(lis([5, 2, 3, 9, 6, 7, 8])).toEqual([2, 3, 6, 7, 8]);
});

test("[1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    expect(lis([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
});

test("[9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
    expect(lis([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1]);
});
