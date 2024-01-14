export function dijkstra(nodes: number[][], src: number, dest: number): number {
    const n = nodes.length;

    const distances: number[] = new Array(n).fill(Number.POSITIVE_INFINITY);
    const visited: boolean[] = new Array(n).fill(false);
    const previous: number[] = new Array(n).fill(-1);

    // set source to itself to be 0 distance
    distances[src] = 0;

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
            if (nodes[shortestNode][i] > 0) {
                // current distance is larger than distance reached through shortest node
                if (
                    distances[i] >
                    distances[shortestNode] + nodes[shortestNode][i]
                ) {
                    distances[i] =
                        distances[shortestNode] + nodes[shortestNode][i];
                    previous[i] = shortestNode;
                }
            }
        }

        // reached desitation
        if (shortestNode === dest) {
            return distances[dest];
        }

        // handle no result
        if (shortest === Number.POSITIVE_INFINITY) {
            return Number.POSITIVE_INFINITY;
        }

        visited[shortestNode] = true;
    }
}
