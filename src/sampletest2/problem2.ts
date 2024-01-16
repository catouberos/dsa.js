import { quickSort } from "../week7/problem1";

export class Topic {
    constructor(
        private w: number,
        private a: number,
    ) {}

    get weight() {
        return this.w;
    }

    get area() {
        return this.a;
    }
}

export class DoraemonCake {
    private areaTable: number[][];

    constructor(
        private a: number,
        private t: Topic[],
    ) {
        const N = this.t.length;
        const W = this.a;

        // ### pre-calculation ###
        // create weight rows with top-padded 0
        this.areaTable = new Array(N + 1);

        // create cols with top-padded 0
        for (let i = 0; i < this.areaTable.length; i++) {
            this.areaTable[i] = new Array(W + 1).fill(0);
        }

        for (let w = 1; w <= W; w++) {
            for (let i = 1; i <= N; i++) {
                // if current weight is larger than (or equal to) current item weight
                // this satisfies that the item can be put into the bag
                if (w >= this.t[i - 1].area) {
                    this.areaTable[i][w] = Math.max(
                        this.areaTable[i - 1][w],
                        this.t[i - 1].weight +
                            this.areaTable[i - 1][w - this.t[i - 1].area],
                    );
                } else {
                    this.areaTable[i][w] = this.areaTable[i - 1][w];
                }
            }
        }
    }

    get topics() {
        return [...this.t];
    }

    /**
     * return the largest weight you can achieve if the surface area A of the cake is unlimited
     */
    unlimitedCake(): number {
        let count = 0;

        for (const topic of this.t) {
            count += topic.weight;
        }

        return count;
    }

    /*
     * assume that you can print at most X topics regardless of the cake surface area A (X is the argument provided and X <= N),
     * return the largest weight you can achieve by eating the cake
     */
    weightByNumber(x: number): number {
        if (x > this.t.length) {
            return -1;
        }

        // construct weight array, then sort
        let weight = 0;
        let weights = [];
        for (const topic of this.t) {
            weights.push(topic.weight);
        }
        // this is sorted from smallest to largest
        weights = quickSort<number>(weights);

        let countUp = 0;
        for (let i = weights.length - 1; i >= 0; i--) {
            weight += weights[i];

            countUp++;

            if (countUp >= x) {
                break;
            }
        }

        return weight;
    }

    /*
     * return the largest weight possible (note: total printed area of all selected topics must not exceed the cake surface area A).
     * In addition, display the topics' indices that have been printed to achieve this largest weight (use a space to separate two consecutive values).
     * Because the number of topics is at most 20, even an exponential time algorithm still works well in this case
     *
     * basically, knapsack, but constant
     */
    largestWeight(): number {
        return this.areaTable[this.t.length][this.a];
    }
}
