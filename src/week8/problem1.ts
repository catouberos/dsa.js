export function fastPower(x: number, n: number): number {
    if (n === 1) {
        return x;
    }

    if (n === 0) {
        return 1;
    }

    if (n % 2 === 1) {
        return x * fastPower(x * x, Math.floor(n / 2));
    }

    return fastPower(x * x, Math.floor(n / 2));
}

export function fastExponentiation(x: number, n: number, m: number): number {
    if (n === 1) {
        return x;
    }

    if (n === 0) {
        return 1;
    }

    const exp = fastExponentiation(x, Math.floor(n / 2), m);
    const sub = (exp * exp) % m;

    if (n % 2 === 1) {
        return (sub * x) % m;
    }

    return sub;
}
