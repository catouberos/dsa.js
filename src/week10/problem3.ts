export function lis(a: number[]): number[] {
    const n = a.length;
    // this is because 0 length is set to -infinity, 1-(n+1) and n for padding (infinity)
    const d = new Array(n + 2).fill(Number.POSITIVE_INFINITY);
    const dIndex = new Array(n + 2).fill(0);
    const result = new Array();
    d[0] = Number.NEGATIVE_INFINITY;

    // pre-compute stuff
    for (let i = 0; i < n; i++) {
        for (let l = 1; l <= n; l++) {
            // check if previous d value is smaller than current value in array
            // and if current value in array is smaller than current d value
            if (d[l - 1] < a[i] && a[i] < d[l]) {
                if (
                    d[l - 1] !== Number.NEGATIVE_INFINITY &&
                    d[l] === Number.POSITIVE_INFINITY
                ) {
                    result.push(d[l - 1]);
                }

                // set current minimum value of length
                d[l] = a[i];
                // set current value position
                dIndex[l] = i;
            }
        }
    }

    // get last value
    let i;
    for (i = 0; d[i] !== Number.POSITIVE_INFINITY; i++);
    result.push(d[i - 1]);

    return result;
}
