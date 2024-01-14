export function prim(nodes: number[][]) {
    const n = nodes.length;
    let nodeCount = 0;
    let length = 0;

    const added: boolean[] = new Array(n).fill(false);
    const distances: number[] = new Array(n).fill(Number.POSITIVE_INFINITY);

    // start from index 0
    distances[0] = 0;

    while (nodeCount < n) {
        let shortest = Number.POSITIVE_INFINITY;
        let shortestNode = -1;

        // find shortest-distance node
        for (let i = 0; i < n; i++) {
            if (added[i]) continue;

            if (shortest > distances[i]) {
                shortest = distances[i];
                shortestNode = i;
            }
        }

        // if cannot found, the graph is not connected
        if (shortest === Number.POSITIVE_INFINITY) {
            return Number.POSITIVE_INFINITY;
        }

        added[shortestNode] = true;
        length += distances[shortestNode];
        nodeCount++;

        // update distance relative to shortestNode
        for (let i = 0; i < n; i++) {
            if (added[i]) continue;

            // if shortestNode and i are connected
            if (nodes[shortestNode][i] > 0) {
                if (distances[i] > nodes[shortestNode][i]) {
                    distances[i] = nodes[shortestNode][i];
                }
            }
        }
    }

    return length;
}
