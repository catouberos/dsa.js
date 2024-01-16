import { expect, test, beforeEach } from "bun:test";
import { DoraemonCake, Topic } from "../../src/sampletest2/problem2";

let dc: DoraemonCake;

beforeEach(() => {
    dc = new DoraemonCake(10, [
        new Topic(8, 7),
        new Topic(10, 8),
        new Topic(5, 3),
    ]);
});

test("unlimited cake", () => {
    expect(dc.unlimitedCake()).toBe(23);
});

test("weight by number", () => {
    expect(dc.weightByNumber(2)).toBe(18);
});

test("largest weight", () => {
    expect(dc.largestWeight()).toBe(13);
});
