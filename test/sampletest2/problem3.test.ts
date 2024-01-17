import { expect, test, beforeEach } from "bun:test";
import { EasyLearning } from "../../src/sampletest2/problem3";

let el: EasyLearning;

beforeEach(() => {
    el = new EasyLearning([
        [0, 1, 5],
        [4, 0, 3],
        [2, 1, 0],
    ]);
});

test("direct sequence", () => {
    expect(el.directSequence()).toBe(5);
});

test("compare", () => {
    expect(el.compare([0, 2], [0, 1, 2])).toBe(1);
});

test("best sequence", () => {
    expect(el.bestSequence()).toBe(4);
});
