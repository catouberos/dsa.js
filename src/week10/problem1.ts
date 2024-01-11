function walk(distances: number[][], cursor: number, end: number, visited: number[][]) {

}

export function solve(
    distances: number[][],
    start: number,
    end: number,
): number[] {
    const results = [0];

    const visited = distances.map(r => r.map(c => 0));

    const r = walk(distances, start, end, visited);
    

    return results;
}
