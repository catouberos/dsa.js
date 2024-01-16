export class SecretSearch {
    constructor(
        private xa: number,
        private ya: number,
        private va: number,
        private xb: number,
        private yb: number,
        private vb: number,
    ) {}

    /**
     * return the minimum time agent A can reach line L
     */
    minTimeA(): number {
        return Math.abs(this.ya) / this.va;
    }

    /**
     * return the time agent A goes from its original location (XA, YA) to a point Z whose coordinate is (XZ, 0) (XZ is the argument provided).
     */
    timeFromA(xz: number): number {
        const distance = Math.sqrt((xz - this.xa) ** 2 + (0 - this.ya) ** 2);
        return distance / this.va;
    }

    private minTimeB(): number {
        return Math.abs(this.yb) / this.vb;
    }

    private timeFromB(xz: number): number {
        const distance = Math.sqrt((xz - this.xb) ** 2 + (0 - this.yb) ** 2);
        return distance / this.vb;
    }

    /**
     * return the X coordinate of point C in line L where agent A and agent B arrive there at the same time
     * basically, binary search
     */
    pointC(): number {
        const epsilon = 0.000001;
        let minC = this.xa;
        let maxC = this.xb;

        while (maxC - minC > epsilon) {
            const midC = (minC + maxC) / 2;
            const timeA = this.timeFromA(midC);
            const timeB = this.timeFromB(midC);

            if (timeA < timeB) {
                minC = midC;
            } else {
                maxC = midC;
            }
        }

        return minC;
    }
}
