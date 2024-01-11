export function countPaths(row: number, column: number) {
    // construct count array
    const countTable: number[][] = new Array(row);

    for (let i = 0; i < row; i++) {
        countTable[i] = new Array(column).fill(0);
    }

    // set start point to 1
    countTable[0][0] = 1;

    for (let y = 0; y < row; y++) {
        for (let x = 0; x < column; x++) {
            if (countTable[y][x] > 0) {
                continue;
            }

            if (y > 0) {
                countTable[y][x] += countTable[y - 1][x];
            }

            if (x > 0) {
                countTable[y][x] += countTable[y][x - 1];
            }
        }
    }

    return countTable[row - 1][column - 1];
}
