/**
 * @param {number[][]} forest
 * @return {number}
 */
function cutOffTree(forest) {
    const m = forest.length;
    const n = forest[0].length;
    const trees = [];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (forest[i][j] > 1) {
                trees.push([forest[i][j], i, j]);
            }
        }
    }
    
    trees.sort((a, b) => a[0] - b[0]);
    
    let totalSteps = 0;
    let startX = 0;
    let startY = 0;
    
    for (const [height, x, y] of trees) {
        const steps = minStepsToTree(forest, m, n, startX, startY, x, y);
        if (steps === -1) {
            return -1;
        }
        totalSteps += steps;
        startX = x;
        startY = y;
    }
    
    return totalSteps;
}

function minStepsToTree(forest, m, n, startX, startY, targetX, targetY) {
    const queue = [[startX, startY, 0]];
    const visited = new Set();
    visited.add(startX + "," + startY);
    
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();
        
        if (x === targetX && y === targetY) {
            return steps;
        }
        
        for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            const newX = x + dx;
            const newY = y + dy;
            
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && forest[newX][newY] !== 0 && !visited.has(newX + "," + newY)) {
                queue.push([newX, newY, steps + 1]);
                visited.add(newX + "," + newY);
            }
        }
    }
    return -1;    
}