
function knightMoves(start, end) {

}

function isOutOfbounds(arr) {
  let [dr, dc] = arr;

  if (dr < 0 || dc < 0 || dr > 7 || dc > 7) {
    return true;
  } else {
    return false;
  }
}
