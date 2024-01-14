export class KnapsackItem {
    constructor(
        public value: number,
        public weight: number,
    ) {
        this.value = value;
        this.weight = weight;
    }
}

export class KnapsackBruteForce {
    private readonly items: KnapsackItem[];
    private readonly capacity: number;

    private selected: boolean[];
    private maxValue = 0;
    private bestItems: KnapsackItem[] = [];

    constructor(items: KnapsackItem[], capacity: number) {
        this.items = items;
        this.selected = new Array(items.length).fill(false);
        this.capacity = capacity;
    }

    private process() {
        let value = 0;
        let weight = 0;

        for (let i = 0; i < this.items.length; i++) {
            if (this.selected[i]) {
                value += this.items[i].value;
                weight += this.items[i].weight;
                if (weight > this.capacity) return;
            }
        }

        if (value > this.maxValue) {
            this.maxValue = value;
            this.bestItems = [...this.items].filter((_, i) => this.selected[i]);
        }
    }

    private subset(idx: number) {
        if (idx === this.items.length) {
            return this.process();
        }

        // unselected
        this.selected[idx] = false;
        this.subset(idx + 1);

        // selected
        this.selected[idx] = true;
        this.subset(idx + 1);
    }

    solve() {
        this.subset(0);

        return [this.maxValue, this.bestItems];
    }
}
