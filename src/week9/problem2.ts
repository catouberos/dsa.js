export class Heap<T> {
    private d: T[];
    private l;

    constructor(data: T[]) {
        this.d = [];
        this.l = 0;

        for (const item of data) {
            this.push(item);
        }
    }

    get items() {
        return this.d.slice(0, this.l);
    }

    get length() {
        return this.l;
    }

    push(value: T) {
        this.d[this.l] = value;
        this.heapifyUp(this.l);
        this.l++;

        return value;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.d[0];

        if (this.length === 1) {
            this.d = [];
            this.l = 0;
            return value;
        }

        this.l--;
        this.d[0] = this.d[this.l];
        this.heapifyDown(0);

        return value;
    }

    private heapifyUp(index: number) {
        if (index === 0) {
            return;
        }

        const parent = this.parent(index);
        const parentValue = this.d[parent];
        const value = this.d[index];
        if (parentValue < value) {
            this.d[index] = parentValue;
            this.d[parent] = value;
            this.heapifyUp(parent);
        }
    }

    private heapifyDown(index: number) {
        const leftIndex = this.left(index);
        const rightIndex = this.right(index);

        if (index > this.l - 1 || leftIndex > this.l - 1) {
            return;
        }

        const leftValue = this.d[leftIndex];
        const rightValue = this.d[rightIndex];
        const value = this.d[index];

        if (leftValue > rightValue && value < leftValue) {
            this.d[index] = leftValue;
            this.d[leftIndex] = value;
            this.heapifyDown(leftIndex);
        }

        if (rightValue >= leftValue && value < rightValue) {
            this.d[index] = rightValue;
            this.d[rightIndex] = value;
            this.heapifyDown(rightIndex);
        }
    }

    private parent(index: number) {
        return Math.floor((index - 1) / 2);
    }

    private left(index: number) {
        return index * 2 + 1;
    }

    private right(index: number) {
        return index * 2 + 2;
    }
}

export function heapSort(arr: number[]) {
    const heap = new Heap(arr);
    const result = [];

    while (heap.length) {
        result.push(heap.pop());
    }

    return result;
}
