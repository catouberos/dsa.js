import { expect, test } from "bun:test";
import { Heap, heapSort } from "../../src/week9/problem2";

test("heap duplicate", () => {
    const heap = new Heap([3, 3, 3, 2]);

    expect(heap.items).toEqual([3, 3, 3, 2]);
    expect(heap.pop()).toBe(3);
    expect(heap.length).toBe(3);
    expect(heap.pop()).toBe(3);
});

test("heap 3 sorted insert", () => {
    const heap = new Heap([5, 3, 1]);

    expect(heap.items).toEqual([5, 3, 1]);
    expect(heap.pop()).toBe(5);
    expect(heap.items).toEqual([3, 1]);
});

test("heap sort", () => {
    const randomNumbers = Array.from(
        { length: 1_000_000 },
        () => Math.floor(Math.random() * 1_000_000) + 1,
    );

    expect(heapSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
        9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
    expect(heapSort([5, 3, 1])).toEqual([5, 3, 1]);
    expect(heapSort(randomNumbers)).toEqual(
        randomNumbers.sort((a, b) => b - a),
    );
});
