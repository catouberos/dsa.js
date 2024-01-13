import { expect, test, beforeEach } from "bun:test";
import { SecretSearch } from "../../src/sampletest2/problem1";

let ss: SecretSearch;

beforeEach(() => {
    ss = new SecretSearch(-1, 1, 1, 1, -1, 0.5);
});

test("minTimeA method", () => {
    expect(ss.minTimeA()).toBe(1);
});

test("timeFromA method", () => {
    expect(ss.timeFromA(0)).toBe(1.4142135623730951);
});

test("pointC method", () => {
    expect(ss.pointC()).toBe(0.7847490310668945);
});
