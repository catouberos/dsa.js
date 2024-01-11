import { expect, test } from "bun:test";
import { countPaths } from "../../src/week10/problem4";

test("1 row, 1 column", () => {
    expect(countPaths(1, 1)).toBe(1);
});

test("1 row, 10 columns", () => {
    expect(countPaths(1, 10)).toBe(1);
});

test("10 rows, 1 column", () => {
    expect(countPaths(10, 1)).toBe(1);
});

test("2 rows, 2 columns", () => {
    expect(countPaths(2, 2)).toBe(2);
});

test("3 rows, 3 columns", () => {
    expect(countPaths(3, 3)).toBe(6);
});

test("10 rows, 10 columns", () => {
    expect(countPaths(10, 10)).toBe(48620);
});
