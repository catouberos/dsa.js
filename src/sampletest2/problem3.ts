export class EasyLearning {
    constructor(private matrix: number[][]) {}

    // return the total switching cost of the learning sequence that consists of exactly two courses: cost 0 and course N-1
    directSequence(): number {
        // could be get as this.matrix.at(0).at(-1);
        return this.matrix[0][this.matrix[0].length - 1];
    }

    // seq1 and seq2 contain two learning sequences.
    // Each element of seq1 and seq2 stores the index of a course. You don't need to check the validity of both seq1 and seq2.
    // Return 1 if the total switching cost of seq1 is larger than the total switching cost of seq2, return -1 if the opposite is true,
    // and return 0 if the two total switching costs are equal
    compare(seq1: number[], seq2: number[]): number {
        let seq1Cost = 0;
        let seq2Cost = 0;

        let current = 0;
        let next = 1;

        while (next < seq1.length) {
            seq1Cost += this.matrix[seq1[current]][seq1[next]];
            current++;
            next++;
        }

        current = 0;
        next = 1;

        while (next < seq2.length) {
            seq2Cost += this.matrix[seq2[current]][seq2[next]];
            current++;
            next++;
        }

        return seq1Cost === seq2Cost ? 0 : seq1Cost > seq2Cost ? 1 : -1;
    }

    // return the total switching cost of the best learning sequence.
    // In addition, display the best learning sequence too (use a space to separate two consecutive course indices).
    // Due to the number of courses, any solution that has a complexity of exponential time or factorial time will not work
    //
    // basically, djkstra's algorithm
    bestSequence(): number {
        const n = this.matrix.length;

        const distances: number[] = new Array(n).fill(Number.POSITIVE_INFINITY);
        const visited: boolean[] = new Array(n).fill(false);
        const previous: number[] = new Array(n).fill(-1);

        // set source to itself to be 0 distance
        distances[0] = 0;

        while (true) {
            // get shortest-distance node from unvisited
            let shortest = Number.POSITIVE_INFINITY;
            let shortestNode = -1;
            for (let i = 0; i < n; i++) {
                if (visited[i]) {
                    continue;
                }

                if (shortest > distances[i]) {
                    shortest = distances[i];
                    shortestNode = i;
                }
            }

            // update distance through shortest
            for (let i = 0; i < n; i++) {
                if (visited[i]) continue;

                // shortest and current is connected
                if (this.matrix[shortestNode][i] > 0) {
                    // current distance is larger than distance reached through shortest node
                    if (
                        distances[i] >
                        distances[shortestNode] + this.matrix[shortestNode][i]
                    ) {
                        distances[i] =
                            distances[shortestNode] +
                            this.matrix[shortestNode][i];
                        previous[i] = shortestNode;
                    }
                }
            }

            // reached desitation
            if (shortestNode === n - 1) {
                return distances[n - 1];
            }

            // handle no result
            if (shortest === Number.POSITIVE_INFINITY) {
                return Number.POSITIVE_INFINITY;
            }

            visited[shortestNode] = true;
        }
    }
}
