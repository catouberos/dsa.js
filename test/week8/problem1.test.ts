import { expect, test } from "bun:test";
import { fastExponentiation, fastPower } from "../../src/week8/problem1";

test("quick power", () => {
    expect(fastPower(9, 10)).toBe(9 ** 10);
    expect(fastPower(7, 9)).toBe(7 ** 9);
    expect(fastPower(100, 200)).toBe(100 ** 200);
});

test("quick exponentiation", () => {
    expect(fastExponentiation(10, 10, 9)).toBe(10 ** 10 % 9);
    /* expect(fastExponentiation(100, 100, 1_000_000_007)).toBe(
        100 ** 100 % 1_000_000_007,
    );
    expect(fastExponentiation(999_999, 1_000, 1_000_000_007)).toBe(
        999_999 ** 1_000 % 1_000_000_007,
    );
    */
});
