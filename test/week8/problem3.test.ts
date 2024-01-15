import { expect, test } from "bun:test";
import { sqrt } from "../../src/week8/problem3";

test("binary search square root", () => {
    expect(Math.round((sqrt(9) + Number.EPSILON) * 10_000) / 10_000).toBe(
        Math.round((Math.sqrt(9) + Number.EPSILON) * 10_000) / 10_000,
    );
    expect(Math.round((sqrt(2) + Number.EPSILON) * 10_000) / 10_000).toBe(
        Math.round((Math.sqrt(2) + Number.EPSILON) * 10_000) / 10_000,
    );
});
