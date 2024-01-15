import { expect, test } from "bun:test";
import { topologicalSearch } from "../../src/week8/problem4";

test("topologial search", () => {
    expect(
        topologicalSearch([
            [0, 0, 0, 0],
            [1, 0, 1, 0],
            [0, 0, 0, 1],
            [1, 0, 0, 0],
        ]),
    ).toEqual([0, 3, 2, 1]);
});
