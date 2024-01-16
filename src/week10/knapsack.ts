// TODO: tests
export class Item {
    constructor(
        private w: number,
        private v: number,
    ) {}

    get weight() {
        return this.w;
    }

    get value() {
        return this.v;
    }
}

export function knapsackTable(items: Item[], N: number, W: number) {
    // create weight rows with top-padded 0
    const weightTable: number[][] = new Array(N + 1);

    // create cols with top-padded 0
    for (let i = 0; i < weightTable.length; i++) {
        weightTable[i] = new Array(W + 1).fill(0);
    }

    for (let w = 1; w <= W; w++) {
        for (let i = 1; i <= N; i++) {
            // if current weight is larger than (or equal to) current item weight
            // this satisfies that the item can be put into the bag
            if (w >= items[i - 1].weight) {
                weightTable[i][w] = Math.max(
                    weightTable[i - 1][w],
                    items[i - 1].value +
                        weightTable[i - 1][w - items[i - 1].weight],
                );
            } else {
                weightTable[i][w] = weightTable[i - 1][w];
            }
        }
    }
    return weightTable;
}
