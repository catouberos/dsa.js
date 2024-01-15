// binary search
export function sqrt(n: number) {
    const epsilon = 0.000001;
    let l = 0;
    let r = n;

    while (r - l > epsilon) {
        const mid = (r + l) / 2;

        if (mid * mid < n) {
            l = mid;
        } else {
            r = mid;
        }
    }

    return l;
}
