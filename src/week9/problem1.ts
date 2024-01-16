export class Task {
    constructor(
        private startTime: number,
        private endTime: number,
    ) {}

    get start() {
        return this.startTime;
    }

    get end() {
        return this.endTime;
    }
}

export function maxTask(tasks: Task[]) {
    const sorted = mergeSort(tasks);
    const result = [sorted[0]];

    let current = sorted[0];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].start < current.end) {
            continue;
        }

        current = sorted[i];
        result.push(sorted[i]);
    }

    return result;
}

export function merge(left: Task[], right: Task[]): Task[] {
    const res: Task[] = [];

    while (left.length && right.length) {
        if (left[0].end <= right[0].end) {
            res.push(left[0]);
            left.shift();
        } else {
            res.push(right[0]);
            right.shift();
        }
    }

    return [...res, ...left, ...right];
}

function ms(arr: Task[]): Task[] {
    const n = arr.length;

    if (n <= 1) {
        return arr;
    }

    const left = ms([...arr].slice(0, Math.floor(n / 2)));
    const right = ms([...arr].slice(Math.floor(n / 2)));

    return merge(left, right);
}

export function mergeSort(arr: Task[]) {
    return ms(arr);
}
