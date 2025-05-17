
function knightMoves(start, end) {
  if (isOutOfBounds(start) || isOutOfBounds(end)) {
    console.log("out of bounds");
    return;
  }
  
  const directions = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]
  const queue = [];
  const visited = new Set();
  const counter = 0

  queue.push(start)
  
  while (queue.length !== 0) {
    visited.add(queue[0].join(','));
    for (let i = 0; i < queue.length(); i++) {
      let cur = queue.shift();
      if (cur[0] === end[0] && cur[1] === end[1]) {
        return counter;
      }
      for (let [dr, dc] of directions) {
         let next = [cur[0] + dr, cur[1] + dc]
      }
    }
  }
  counter++;
}

function isOutOfbounds(arr) {
  let [dr, dc] = arr;

  if (dr < 0 || dc < 0 || dr > 7 || dc > 7) {
    return true;
  } else {
    return false;
  }
}
