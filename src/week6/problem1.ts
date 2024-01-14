export function bubbleSort<T>(array: T[]) {
    let swapped = false;
    let count = 0;
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                swapped = true;
                count++;
                // swap
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }

            // early termination
            if (!swapped) return [count, array];
        }
    }

    return [count, array];
}

export function selectionSort<T>(array: T[]) {
    const results = [[...array]];

    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        // finding minimum
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        [array[i], array[min]] = [array[min], array[i]];

        results.push([...array]);
    }

    return results;
}
