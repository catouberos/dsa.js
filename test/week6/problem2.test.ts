import { expect, test } from "bun:test";
import { KnapsackBruteForce, KnapsackItem } from "../../src/week6/problem2";

test("knapsack brute force", () => {
    const knapsack = new KnapsackBruteForce(
        [
            new KnapsackItem(42, 7),
            new KnapsackItem(12, 3),
            new KnapsackItem(40, 4),
            new KnapsackItem(25, 5),
        ],
        10,
    );

    expect(knapsack.solve()[0]).toBe(65);
});
