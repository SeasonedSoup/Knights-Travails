export function knightMoves(start, end) {
    if (isOutOfBounds(start) || isOutOfBounds(end)) {
      console.log("out of bounds");
      return;
    }
    
    const directions = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]
    let counter = 0
  
    const levelOrderGraph = () => {
        const queue = [];
        const visited = new Set();

        queue.push(start);
        visited.add(queue[0].join(','))

        while (queue.length !== 0) {
            let queueSize = queue.length
            for (let i = 0; i < queueSize; i++) {
                let cur = queue.shift();
                if (cur[0] === end[0] && cur[1] === end[1]) {
                    return counter;
                }
                for (let [dr, dc] of directions) {
                    let next = [cur[0] + dr, cur[1] + dc]
                    if (isOutOfBounds(next) || visited.has(next.join(','))) {
                        continue
                    }
                    visited.add(next.join(''))
                    queue.push(next);
                }
            }
            counter++;
        } 
    }
    return levelOrderGraph();
}
  
  function isOutOfBounds(arr) {
    let [dr, dc] = arr;
  
    if (dr < 0 || dc < 0 || dr > 7 || dc > 7) {
      return true;
    } else {
      return false;
    }
  }