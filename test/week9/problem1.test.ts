import { expect, test } from "bun:test";
import { Task, maxTask } from "../../src/week9/problem1";

test("max tasks", () => {
    expect(
        maxTask([
            new Task(4, 5),
            new Task(2, 6),
            new Task(1, 3),
            new Task(6, 7),
        ]),
    ).toEqual([new Task(1, 3), new Task(4, 5), new Task(6, 7)]);
});
