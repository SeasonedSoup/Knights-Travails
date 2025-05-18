import {LinkedList} from "./linkedList.js"


export function knightMoves(start, end) {
    if (isOutOfBounds(start) || isOutOfBounds(end)) {
      console.log("out of bounds");
      return;
    }
    
    const directions = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]]
    let counter = 0

    const levelOrderGraph = () => {
        const queue = [];
        queue.push({
          pos: start,
          path: new LinkedList().append(start)
        });
        
        const visited = new Set();
        visited.add(start.join(','))

        while (queue.length !== 0) {
            let queueSize = queue.length
            for (let i = 0; i < queueSize; i++) {
                let {pos, path} = queue.shift();
                if (pos[0] === end[0] && pos[1] === end[1]) {
                    return printResult(counter, path);
                }
                for (let [dr, dc] of directions) {
                    let next = [pos[0] + dr, pos[1] + dc]
                    if (isOutOfBounds(next) || visited.has(next.join(','))) continue;
              
                    visited.add(next.join(''))
                    
                    let nextPath = path.copy();
                    nextPath.append(next);
                    queue.push({pos:next, path: nextPath});
                }
            }
            counter++;
        } 
    }
    return levelOrderGraph()
}

function printResult(counter, path) {
  return `=> The Fastest Route Your Knight Arrived in took ${counter} steps
                  Heres the Route: ${path.returnArrayVals().map(coord => `[${coord}]`).join(' -> ')}`
}


function isOutOfBounds(arr) {
  let [dr, dc] = arr;

  if (dr < 0 || dc < 0 || dr > 7 || dc > 7) return true;
  else {
    return false;
  }
}

