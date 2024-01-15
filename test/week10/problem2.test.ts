import { expect, test } from "bun:test";
import { prim } from "../../src/week10/problem2";

test("minimum spanning tree", () => {
    const distances = [
        [0, 1, 2, 8],
        [1, 0, 3, 5],
        [2, 3, 0, 4],
        [8, 5, 4, 0],
    ];

    expect(prim(distances)).toEqual(7);
});
