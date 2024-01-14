import { expect, test } from "bun:test";
import { dijkstra } from "../../src/week10/problem1";

test("shortest path", () => {
    const distances = [
        [0, 3, 2, 0],
        [3, 0, 0, 5],
        [2, 0, 0, 9],
        [0, 5, 9, 0],
    ];

    expect(dijkstra(distances, 0, 3)).toEqual(8);
});
