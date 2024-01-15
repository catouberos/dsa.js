export function topologicalSearch(courses: number[][]) {
    const queue = [];
    const result = [];
    const visited: boolean[] = new Array(courses.length).fill(false);
    const inNode: number[] = new Array(courses.length).fill(0);

    // computed
    for (let target = 0; target < courses.length; target++) {
        for (let source = 0; source < courses.length; source++) {
            // if a course has pre-requisites
            if (courses[target][source]) {
                inNode[target]++;
            }
        }
    }

    // first: queue source
    for (let i = 0; i < courses.length; i++) {
        if (inNode[i] === 0) {
            queue.push(i);
            visited[i] = true;
            break;
        }
    }

    while (queue.length) {
        const target = queue[0];
        queue.shift();
        result.push(target);

        for (let source = 0; source < courses.length; source++) {
            if (!visited[source] && courses[source][target]) {
                inNode[source]--;

                if (inNode[source] === 0) {
                    queue.push(source);
                    visited[source] = true;
                }
            }
        }
    }

    console.log(result);

    return result;
}
