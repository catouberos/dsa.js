function qs(arr: number[], lo: number, hi: number): number[] {
    if (lo >= hi) {
        return arr;
    }

    const p = partition(arr, lo, hi);

    qs(arr, lo, p - 1);
    qs(arr, p + 1, hi);

    return arr;
}

// return the pivot index
function partition(arr: number[], lo: number, hi: number): number {
    const p = arr[hi];
    let c = lo;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= p) {
            const temp = arr[c];
            arr[c] = arr[i];
            arr[i] = temp;
            c++;
        }
    }

    arr[hi] = arr[c];
    arr[c] = p;

    return c;
}

export function quickSort(arr: number[]) {
    return qs(arr, 0, arr.length - 1);
}

export function merge(left: number[], right: number[]): number[] {
    const res: number[] = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left[0]);
            left.shift();
        } else {
            res.push(right[0]);
            right.shift();
        }
    }

    return [...res, ...left, ...right];
}

function ms(arr: number[]): number[] {
    const n = arr.length;

    if (n <= 1) {
        return arr;
    }

    const left = ms([...arr].slice(0, Math.floor(n / 2)));
    const right = ms([...arr].slice(Math.floor(n / 2)));

    return merge(left, right);
}

export function mergeSort(arr: number[]) {
    return ms(arr);
}
